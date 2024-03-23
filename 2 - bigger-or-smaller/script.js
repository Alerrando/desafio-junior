const numbers = document.querySelectorAll("#number");
const buttonCalc = document.querySelector(".button-calc");

buttonCalc.addEventListener("click", () => {
    const biggerNumber = document.querySelector(".header-title.bigger");
    const smallerNumber = document.querySelector(".header-title.smaller");
    const maxValue = Math.max(...Array.from(numbers).map((number) => number.value));
    const minValue = Math.min(...Array.from(numbers).map((number) => number.value));
    
    biggerNumber.innerHTML = `O Maior valor é ${maxValue}`;
    smallerNumber.innerHTML = `O Menor valor é ${minValue}`;
})