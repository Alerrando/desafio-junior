import React from "react";
import Chart from "react-apexcharts";
import { ExcelDataTypes, ProductsExcelData } from "../../App";

type PieCountryProps = {
    excelData: ExcelDataTypes,
    products: ProductsExcelData[],
}

type DatasType = {
	totalProfit: number,
	nameTypeProduct: string,
}

export function PieCountry({ excelData, products }: PieCountryProps){
    const countrys = products.filter((product) => product.country !== "Country" && product.country);
    const datas = getDatasCountries();

    const chartConfig = {
        type: "bar",
        series: [
            {
                name: "Total Profit",
                data: datas.map((data) => data.totalProfit),
            }
        ],
        options: {
            chart: {
                toolbar: {
                    show: false,
                },
            },
            xaxis: {
                categories: datas.map((data) => data.nameTypeProduct),
                labels: {
                    style: {
                        colors: "#616161",
                        fontSize: "12px",
                        fontFamily: "inherit",
                        fontWeight: 400,
                    },
                },
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
                custom: function({series, seriesIndex, dataPointIndex, w}){
                    const productType = datas[dataPointIndex].nameTypeProduct;
                    return '<div class="tooltip">' + 
                           '<span>' + productType + '</span>' +
                           '</div>';
                }
            },
        },
    };

    return(
        <Chart {...chartConfig} height="100%" width="180%" />
    );

    function getDatasCountries(){
        const highestIncomeCountries: DatasType[] = [];
        const sortedExcelData = excelData.sort((product1: string[], product2: string[]) => {
            const country1 = product1[1];
            const country2 = product2[1];
            return country1 < country2 ? -1 : country1 > country2 ? 1 : 0;
        });

        countrys.forEach((info) => {
            highestIncomeCountries.push(filterProductsByCountry(info.country, sortedExcelData));
        });

        return highestIncomeCountries;
    }

    function filterProductsByCountry(country: string, infos: ExcelDataTypes){
        const countryProducts = infos.filter((product: string[]) => product[1] === country);
        const maxProfit = Math.max(...countryProducts.map((product) => parseFloat(product[13])));
        const highestProfitProduct = countryProducts.find((product) => parseFloat(product[13]) === maxProfit) as string[];
        const returnFilter: DatasType = {
            nameTypeProduct: highestProfitProduct[2],
            totalProfit: parseFloat(highestProfitProduct[13]),
        }
        return returnFilter;
    }
}
