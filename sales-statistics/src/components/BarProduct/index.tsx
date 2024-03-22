import React from "react";
import Chart from "react-apexcharts";
import { ProductsExcelData } from "../../App";

type BarProductProps = {
    products: ProductsExcelData[];
    attribute: string;
	atributeArray: keyof ProductsExcelData;
}

export function BarProduct({ products, attribute, atributeArray }: BarProductProps){
	const product = products.filter((product: ProductsExcelData) => product[atributeArray] === attribute)[0];

	const chartConfig = {
		type: "bar",
		height: "100%",
		width: "150%",
		series: [
			{
				name: "Sales",
				data: [
					product ? product.totalUnitsSold.toFixed(2) : "", 
					product ? product.totalRevenue.toFixed(2) : "", 
					product ? product.totalCost.toFixed(2) : "", 
					product ? product.totalProfit.toFixed(2) : ""
				],
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
				categories: [
					"Total Units Sold",
					"Total Revenue",
					"Total Cost",
					"Total Profit",
				],
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
		<Chart {...chartConfig}  />
	);
}