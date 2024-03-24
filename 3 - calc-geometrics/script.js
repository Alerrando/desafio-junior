buttonSquare.addEventListener("click", () => {
    const inputAreaX = document.querySelector("#area-x");
    const inputAreaY = document.querySelector("#area-y");

    if (!inputAreaX.value || !inputAreaY.value) {
        alert("Por favor, insira os valores de área X e Y.");
        return;
    }

    const result = inputAreaX.value * inputAreaY.value;
    const resultCalc = document.querySelector(".result-calc-square");
    resultCalc.innerHTML = `A área do quadrado é ${result}`;
})

buttonRetangle.addEventListener("click", () => {
    const lengthRetangle = document.querySelector("#length");
    const widthRetangle = document.querySelector("#width");

    if (!lengthRetangle.value || !widthRetangle.value) {
        alert("Por favor, insira os valores de comprimento e largura.");
        return;
    }

    const result = lengthRetangle.value * widthRetangle.value;
    const resultCalc = document.querySelector(".result-calc-rectangle");
    resultCalc.innerHTML = `A área do retângulo é ${result}`;
})

buttonTriangle.addEventListener("click", () => {
    const baseTriangle = document.querySelector("#base");
    const heightTriangle = document.querySelector("#height");

    if (!baseTriangle.value || !heightTriangle.value) {
        alert("Por favor, insira os valores de base e altura.");
        return;
    }

    const result = (baseTriangle.value * heightTriangle.value) / 2;
    const resultCalc = document.querySelector(".result-calc-triangle");
    resultCalc.innerHTML = `A área do triângulo é ${result}`;
})

buttonCircle.addEventListener("click", () => {
    const areaCircle = document.querySelector("#area");

    if (!areaCircle.value) {
        alert("Por favor, insira o valor da área.");
        return;
    }

    const result = Math.PI * Math.pow(areaCircle.value, 2);
    const resultCalc = document.querySelector(".result-calc-circle");
    resultCalc.innerHTML = `A área do círculo é ${result.toFixed(3)}`;
})
