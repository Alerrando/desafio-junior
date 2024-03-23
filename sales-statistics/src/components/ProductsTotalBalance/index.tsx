import React from "react";
import { useSearchParams } from "react-router-dom";
import { ProductsExcelData } from "../../App";
import { BarProduct } from "../BarProduct";
import { HeaderStatistics } from "../HeaderStatistics";

type ProductsTotalBalanceProps = {
    products: ProductsExcelData[];
}

export function ProductsTotalBalance({ products }: ProductsTotalBalanceProps){
	const [searchParams, setSearchParams] = useSearchParams();
	const productName = searchParams.get("product") || null;

	return(
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
                <BarProduct products={products} attribute={productName as string} atributeArray="productName" />
			}
		</section>
	);

	function handleTypeProductUrl(nameProduct: string){
		setSearchParams(state => {
			nameProduct ? state.set("product", nameProduct) : state.delete("product");
			
			return state;
		});
	}
}