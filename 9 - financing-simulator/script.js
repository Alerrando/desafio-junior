const form = document.querySelector("form");
const range = document.querySelector(".form-range");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    calcFinancing(parseFloat(event.target[0].value), parseInt(event.target[1].value), parseInt(event.target[2].value));
})

function calcFinancing(valueTotal, quantPortion, nominalInterestRate) {
    const valueRange = document.querySelector("#valueRange");
    const totalAmount = document.querySelector("#valueTotalFinancement");
    const totalEffectiveCost = document.querySelector("#totalEffectiveCostFinancing");
    const effectiveMonthlyRate = document.querySelector("#effectiveMonthlyRate");

    const nominalInterestRateMonth = (nominalInterestRate / 100) / 12;
    const portion = valueTotal * (nominalInterestRateMonth / (1 - Math.pow((1 + nominalInterestRateMonth), -quantPortion)));

    valueRange.innerHTML = `R$${portion.toFixed(2)}`;
    totalAmount.innerHTML = `R$${(portion * quantPortion).toFixed(2)}`
    totalEffectiveCost.innerHTML = `R$${((portion * quantPortion) - valueTotal).toFixed(2)}`
    effectiveMonthlyRate.innerHTML = `${(Math.pow((1 + nominalInterestRateMonth), (1/12)) - 1).toFixed(5)}%`
}

function showQuantPortion(e){
    const spanRange = document.querySelector("#quantPortion");
    spanRange.innerHTML = `Quantidade de Parcelas: ${e.value}`;
}