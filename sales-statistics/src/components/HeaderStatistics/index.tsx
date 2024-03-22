import React from "react";
import { ProductsExcelData } from "../../App";

type HeaderStatisticsProps = {
    headerTitle: string;
    handleFilterStatistics: (value: string) => void;
    selectMensageDefault: string;
    nameSelect: string;
    atrributeOption: string;
    arrayOptins: ProductsExcelData[];
}

export function HeaderStatistics({ headerTitle, nameSelect, atrributeOption, handleFilterStatistics, selectMensageDefault, arrayOptins }: HeaderStatisticsProps){
	return(
		<header className="w-full flex items-center justify-between">
			<h2>{headerTitle}</h2>

			<select 
				name={nameSelect}
				className="w-max border border-[#D5D5D8] outline-none px-2 py-1 rounded" 
				onClick={e => handleFilterStatistics((e.target as HTMLInputElement).value)}
			>
				<option value="default" defaultChecked>{selectMensageDefault}</option>
				{arrayOptins.map((option: ProductsExcelData, index: Key) => (
					<option key={index} value={option[atrributeOption]}>{option[atrributeOption]}</option>
				))}
			</select>

		</header>
	);
}