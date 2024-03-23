const form = document.querySelector("form");
const range = document.querySelector(".form-range");

range.addEventListener("click", (e) => {
    const spanRange = document.querySelector("#quantPortion");
    spanRange.innerHTML = `Quantidade de Parcelas: ${e.target.value}`;
})

form.addEventListener("submit", function (event) {
    event.preventDefault();

    calcQuantPortion(parseFloat(event.target[0].value), parseInt(event.target[1].value), parseInt(event.target[2].value));
})

function calcQuantPortion(valueTotal, quantPortion, nominalInterestRate) {
    const aux = Math.pow((1 + nominalInterestRate), -quantPortion);
    const portion = valueTotal * (nominalInterestRate / (1 - aux));

    console.log(portion.toFixed(2));
}