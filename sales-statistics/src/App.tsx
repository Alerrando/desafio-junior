import  React, { useEffect, useState } from "react";
import * as XLSX from 'xlsx';

type ExcelDataTypes = [
	string[]
];

type ProductsExcelData = {
	productName: string,
	totalUnitsSold: number, 
	totalRevenue: number, 
	totalCost: number, 
	totalProfit: number,

}

export function App() {
	const [excelData, setExcelData] = useState<[ExcelDataTypes[]]>([[]]);
	const [products, setProducts] = useState<ProductsExcelData[]>([]);

	useEffect(() => {
		(async () => {
			await handleFileUpload();
		}) ()
	}, [])

	return (
		<>
            <table>
                <thead>
                    <tr>
                        {excelData.length > 0 &&
                            excelData[0].map((cell, index) => (
                                <th key={index}>{cell}</th>
                            ))}
                    </tr>
                </thead>
                <tbody>
                    {excelData.length > 1 &&
                        excelData.slice(1).map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {row.map((cell, cellIndex) => (
                                    <td key={cellIndex}>{cell}</td>
                                ))}
                            </tr>
                        ))}
                </tbody>
            </table>

			<section className="w-full h-[75vh] flex flex-col items-start justif-start">
				<header className="w-[95%] flex items-center justify-between mx-auto">
					<h2>Products Balance Total</h2>

					<select name="product" id="product" className="border border-[#D5D5D8] outline-none px-2 py-1 rounded" onClick={() => getProductsName()}>
						<option value="default" defaultChecked>Select Product</option>
						{products.map((product: ProductsExcelData) => (
							<option value={product.productName}>{product.productName}</option>
						))}
					</select>
				</header>
			</section>
		</>
	);

	async function handleFileUpload(){
		const response = await fetch("../sales.csv");
        const blob = await response.blob();
        const reader = new FileReader();

        reader.onload = (event) => {
			if(!event.target) return;
            const binaryString = event.target.result;
            const workbook = XLSX.read(binaryString, { type: 'binary' });
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });
			
			setExcelData(data);
        };

        reader.readAsBinaryString(blob);
    };

	function getProductsName(){
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
						totalUnitsSold: parseFloat(data[8] as unknown as string)
					});
				}
			}
		})

		setProducts(auxProducts);
	}

	function indexOfProductName(product: string, auxProducts: ProductsExcelData[]){
		let verify = -1;
		auxProducts.forEach((productAux: ProductsExcelData, __) => {
			if(productAux.productName === product) { verify = 1};
		})

		return verify;
	}
}