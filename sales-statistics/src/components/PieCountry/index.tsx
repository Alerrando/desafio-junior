import React from "react";
import Chart from "react-apexcharts";
import { ExcelDataTypes, ProductsExcelData } from "../../App";

type PieCountryProps = {
    excelData: ExcelDataTypes,
    products: ProductsExcelData[],
    countryName: string;
}

export function PieCountry({ excelData, countryName, products }: PieCountryProps){
	const datas = getDatasCoutrys();
	const country = products.map((product) => product.country);

	console.log(country.length, datas.length);
	const chartConfig = {
		type: "pie",
		height: 360,
		width: 550,
		series: [
			{
				name: "Sales",
				data: datas,
			},
		],
		options: {
			chart: {
				toolbar: {
					show: false,
				},
			},
			title: {
				show: "",
			},
			dataLabels: {
				enabled: false,
			},
			colors: ["#020617"],
			plotOptions: {
				bar: {
					columnWidth: "40%",
					borderRadius: 2,
				},
			},
			xaxis: {
				axisTicks: {
					show: false,
				},
				axisBorder: {
					show: false,
				},
				labels: {
					style: {
						colors: "#616161",
						fontSize: "12px",
						fontFamily: "inherit",
						fontWeight: 400,
					},
				},
				categories: country,
			},
			yaxis: {
				labels: {
					style: {
						colors: "#616161",
						fontSize: "12px",
						fontFamily: "inherit",
						fontWeight: 400,
					},
				},
			},
			grid: {
				show: true,
				borderColor: "#dddddd",
				strokeDashArray: 5,
				xaxis: {
					lines: {
						show: true,
					},
				},
				padding: {
					top: 5,
					right: 20,
				},
			},
			fill: {
				opacity: 0.8,
			},
			tooltip: {
				theme: "dark",
			},
		},
	};

	return(
		<Chart {...chartConfig} />
	);

	function getDatasCoutrys(){
		const maiorRendaPorPais = {};
		const aux = excelData.sort((product1: string[], product2: string[]) => {
			const country1 = product1[1];
			const country2 = product2[1];
			return country1 < country2 ? -1 : country1 > country2 ? 1 : 0;
		});

		aux.forEach((product: string[]) => {
			const pais = product[1];
			const rendaTotal = parseInt(product[11]);

			if (!maiorRendaPorPais[pais] || rendaTotal > maiorRendaPorPais[pais]) {
				maiorRendaPorPais[pais] = rendaTotal;
			}
		});


		return Object.values(maiorRendaPorPais);
	}
}