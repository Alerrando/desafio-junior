import React from "react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import * as XLSX from "xlsx";
import { BarProduct } from "./components/BarProduct";
import { HeaderStatistics } from "./components/HeaderStatistics";

type ExcelDataTypes = [
	string[]
];

export type ProductsExcelData = {
	productName: string,
	totalUnitsSold: number, 
	totalRevenue: number, 
	totalCost: number, 
	totalProfit: number,
	country: string;
}

export function App() {
	const [searchParams, setSearchParams] = useSearchParams();
	const [excelData, setExcelData] = useState<[ExcelDataTypes[]]>([[]]);
	const [products, setProducts] = useState<ProductsExcelData[]>([]);
	const productName = searchParams.get("product") || null;

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
		<main className="h-screen w-full flex flex-wrap items-start justify-between gap-4">
			<section className="w-[45%] h-auto flex flex-col items-start justif-start py-3 px-8 gap-4 shadow-lg">
				<HeaderStatistics
					arrayOptins={products}
					atrributeOption="productName"
					handleFilterStatistics={handleTypeProductUrl}
					headerTitle="Products Total Balance"
					nameSelect="product"
					selectMensageDefault="Select Product"
					key="product-header-statistics"
				/>
				{products.length > 0 && productName !== "default" &&
						<BarProduct products={products} productName={productName} />
				}
			</section>
			
			<section className="w-[45%] h-auto flex flex-col items-start justif-start py-3 px-8 gap-4 shadow-lg">
				<HeaderStatistics
					arrayOptins={products}
					atrributeOption="country"
					handleFilterStatistics={handleCountryTypeProductUrl}
					headerTitle="Highest Revenue per Country"
					nameSelect="country"
					selectMensageDefault="Select Country"
					key="country-header-statistics"
				/>
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

	function handleCountryTypeProductUrl(country: string){
		setSearchParams(state => {
			country ? state.set("country", country) : state.delete("country");
			
			return state;
		});
	}

	function getProducts(){
		const auxProducts: ProductsExcelData[] = [];
		excelData.forEach((data: ExcelDataTypes[], index: number) => {
			if(index > 0){
				const product: string = data[2] as unknown as string;
				if(indexOfProductName(product, auxProducts) === -1){
					auxProducts.push({
						productName: product,
						totalCost: parseFloat(data[12] as unknown as string),
						totalProfit: parseFloat(data[13] as unknown as string),
						totalRevenue: parseFloat(data[11] as unknown as string),
						totalUnitsSold: parseFloat(data[8] as unknown as string),
						country: data[1] as unknown as string
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