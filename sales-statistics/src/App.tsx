import React from "react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import * as XLSX from "xlsx";
import { BarProduct } from "./components/BarProduct";
import { HeaderStatistics } from "./components/HeaderStatistics";
import { PieCountry } from "./components/PieCountry";

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
	const [searchParams, setSearchParams] = useSearchParams();
	const [excelData, setExcelData] = useState<ExcelDataTypes>([[]]);
	const [products, setProducts] = useState<ProductsExcelData[]>([]);
	const productName = searchParams.get("product") || null;
	const regionName = searchParams.get("region") || null;


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
			<section className="w-[45%] max-h-[45%] h-full flex flex-col items-start justif-start py-3 px-8 gap-4 shadow-lg">
				<HeaderStatistics
					arrayOptins={products}
					atrributeOption="productName"
					handleFilterStatistics={handleTypeProductUrl}
					headerTitle="Products Total Balance"
					nameSelect="product"
					selectMensageDefault="Select Product"
					key="product-header-statistics"
				/>

				{products.length > 0 && productName &&  productName !== "default" &&
					<BarProduct 
						products={products} 
						attribute={productName as string} 
						atributeArray="productName" 
					/>
				}
			</section>
			
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
					<BarProduct 
						products={products} 
						attribute={regionName as string} 
						atributeArray="regionName" 
					/>
				}
			</section>

			<section className="w-full max-h-[40%] h-full flex flex-col items-start justif-start py-3  gap-4 shadow-lg">
				<header className="w-full flex items-center justify-start px-8">
					<h2>Highest Revenue per Country</h2>
				</header>

				{products.length > 0 &&
					<PieCountry excelData={excelData} products={products} />
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
			const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });
			
			setExcelData(data);
		};

		reader.readAsBinaryString(blob);
	}

	function handleTypeProductUrl(nameProduct: string){
		setSearchParams(state => {
			nameProduct ? state.set("product", nameProduct) : state.delete("product");
			
			return state;
		});
	}

	function handleRegionUrl(region: string){
		setSearchParams(state => {
			region ? state.set("region", region) : state.delete("region");
			
			return state;
		});
	}

	function getProducts(){
		const auxProducts: ProductsExcelData[] = [];
		excelData.forEach((data: string[], index: number) => {
			if(index > 0){
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