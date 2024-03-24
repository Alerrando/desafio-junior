# Estatísticas de Vendas

Este diretório contém uma solução para o exercício "Estatísticas de Vendas".

## Descrição do Exercício

Leia o arquivo em anexo "sales.csv" que contém dados de vendas agrupados por tipo e país. Crie um programa que calcule e exiba as seguintes estatísticas:
  Vendas (total de unidades vendidas, total de receita, custo total, lucro total) por tipo de produto.
  Vendas por tipo de produto e região.
  Tipo de produto com maior receita de cada país.

## Solução

A solução consiste em um projeto com ReactJS e Typescript. O usuário consegue visualizar as vendas por tipo de produto e por região, além de ter um gráfico mostrando qual o tipo de produto com a maior receita de cada país e a quantidade de lucro total.

## Código Fonte

### App.tsx

```tsx
import React from "react";
import { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import { BarCountry } from "./components/BarCountry";
import { ProductsTotalBalance } from "./components/ProductsTotalBalance";
import { RegionTotalBalance } from "./components/RegionTotalBalance";

export type ExcelDataTypes = [
	string[]
];

export type ProductsExcelData = {
	productName: string,
	regionName: string,
	totalUnitsSold: number, 
	totalRevenue: number, 
	totalCost: number, 
	totalProfit: number,
	country: string;
}

export function App() {
	const [excelData, setExcelData] = useState<ExcelDataTypes>([[]]);
	const [products, setProducts] = useState<ProductsExcelData[]>([]);

	useEffect(() => {
		(async () => {
			await handleFileUpload();
		}) ();
	}, []);

	useEffect(() => {
		getProducts();
	}, [excelData]);

	if(products.length === 0) return <h1>Loading...</h1>;


	return (
		<main className="h-screen w-full flex flex-col md:flex-row md:flex-wrap items-start md:justify-between gap-4">
			<ProductsTotalBalance products={products} />
			
			<RegionTotalBalance products={products} />

			<section className="w-full max-h-[40%] h-full flex flex-col items-start justif-start py-3  gap-4 shadow-lg">
				<header className="w-full flex items-center justify-start px-8">
					<h2>Highest Revenue per Country</h2>
				</header>

				{products.length > 0 &&
					<BarCountry excelData={excelData} products={products} />
				}
			</section>
		</main>
	);

	async function handleFileUpload(){
		const response = await fetch("../sales.csv");
		const blob = await response.blob();
		const reader = new FileReader();

		reader.onload = (event) => {
			if(!event.target) return;
			const binaryString = event.target.result;
			const workbook = XLSX.read(binaryString, { type: "binary" });
			const sheetName = workbook.SheetNames[0];
			const sheet = workbook.Sheets[sheetName];
			const data = XLSX.utils.sheet_to_json(sheet, { header: 1 }) as ExcelDataTypes;
			
			setExcelData(data);
		};

		reader.readAsBinaryString(blob);
	}

	function getProducts(){
		const auxProducts: ProductsExcelData[] = [];
		excelData.filter((__, index) => index > 0).forEach((data: string[]) => {
			if(indexOfProductName(data[2], auxProducts) === -1){
				auxProducts.push({
					productName: data[2],
					regionName: data[1],
					totalCost: parseFloat(data[12]),
					totalProfit: parseFloat(data[13]),
					totalRevenue: parseFloat(data[11]),
					totalUnitsSold: parseFloat(data[8]),
					country: data[1]
				});
			}
		});
		setProducts(auxProducts);
	}

	function indexOfProductName(product: string, auxProducts: ProductsExcelData[]){
		let verify = -1;
		auxProducts.forEach((productAux: ProductsExcelData) => {
			if(productAux.productName === product) { verify = 1;}
		});

		return verify;
	}
}
```

### BarCountry.tsx

### BarProduct.tsx
```tsx
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
```

### Products Total Balance

### Region Total Balance
```tsx
import React from "react";
import { useSearchParams } from "react-router-dom";
import { ProductsExcelData } from "../../App";
import { BarProduct } from "../BarProduct";
import { HeaderStatistics } from "../HeaderStatistics";

type RegionTotalBalanceProps = {
    products: ProductsExcelData[];
}

export function RegionTotalBalance({ products }: RegionTotalBalanceProps){
	const [searchParams, setSearchParams] = useSearchParams();
	const regionName = searchParams.get("region") || null;

	return(
		<section className="w-[45%] max-h-[45%] h-full flex flex-col items-start justif-start py-3  gap-4 shadow-lg">
			<HeaderStatistics
				arrayOptins={products}
				atrributeOption="regionName"
				handleFilterStatistics={handleRegionUrl}
				headerTitle="Region Total Balance"
				nameSelect="region"
				selectMensageDefault="Select Region"
				key="region-header-statistics"
			/>

			{products.length > 0 && regionName &&  regionName !== "default" &&
                <BarProduct products={products} attribute={regionName as string} atributeArray="regionName" />
			}
		</section>
	);

	function handleRegionUrl(region: string){
		setSearchParams(state => {
			region ? state.set("region", region) : state.delete("region");
			
			return state;
		});
	}
}
```