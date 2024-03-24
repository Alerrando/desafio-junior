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
		<section className="w-[45%] max-h-[45%] h-full flex flex-col items-start justif-start p-3 gap-4 shadow-lg">
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