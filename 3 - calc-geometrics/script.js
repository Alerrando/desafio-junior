const buttonSquare = document.querySelector("#calc-square");
const buttonRetangle = document.querySelector("#calc-rectangle");
const buttonTriangle = document.querySelector("#calc-triangle");
const buttonCircle = document.querySelector("#calc-circle");

buttonSquare.addEventListener("click", () => {
    const inputAreaX = document.querySelector("#area-x");
    const inputAreaY = document.querySelector("#area-y");

    const result = inputAreaX.value * inputAreaY.value;
    const resultCalc = document.querySelector(".result-calc-square");
    resultCalc.innerHTML = `A area do quadrado é ${result}`
})

buttonRetangle.addEventListener("click", () => {
    const lengthRetangle = document.querySelector("#length");
    const widthRetangle = document.querySelector("#width");

    const result = lengthRetangle.value * widthRetangle.value;
    const resultCalc = document.querySelector(".result-calc-rectangle");
    resultCalc.innerHTML = `A area do retângulo é ${result}`
})

buttonTriangle.addEventListener("click", () => {
    const baseTriangle = document.querySelector("#base");
    const heightTriangle = document.querySelector("#height");

    const result = (baseTriangle.value * heightTriangle.value) / 2;
    const resultCalc = document.querySelector(".result-calc-triangle");
    resultCalc.innerHTML = `A area do triângulo é ${result}`
})

buttonCircle.addEventListener("click", () => {
    const areaCircle = document.querySelector("#area");

    const result = Math.PI * Math.pow(areaCircle.value, 2);
    const resultCalc = document.querySelector(".result-calc-circle");
    resultCalc.innerHTML = `A area do circulo é ${result.toFixed(3)}`
})