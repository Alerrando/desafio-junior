const buttonSquare = document.querySelector("#calc-square");

buttonSquare.addEventListener("click", () => {
    const inputAreaX = document.querySelector("#area-x");
    const inputAreaY = document.querySelector("#area-y");

    const result = inputAreaX.value * inputAreaY.value;
    const resultCalc = document.querySelector(".result-calc-square");
    console.log(result)
    resultCalc.innerHTML = `A area do quadrado é ${result}`
})