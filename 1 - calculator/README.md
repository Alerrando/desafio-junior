# Calculadora Básica

Este diretório contém uma solução para o exercício "Calculadora Básica".

## Descrição do Exercício

Crie uma calculadora que permita a entrada de dois números e a escolha da operação desejada entre soma, subtração, multiplicação e divisão. Após a escolha da operação, exiba o resultado na tela.

## Solução

A solução consiste em um arquivo HTML (`index.html`), um arquivo CSS (`style.css`) e um arquivo JavaScript (`script.js`). O arquivo HTML contém a estrutura básica da calculadora, o arquivo CSS define o estilo da calculadora e o arquivo JavaScript adiciona a lógica para realizar as operações de cálculo.

## Instruções de Execução

Para executar a calculadora, abra o arquivo `index.html` em um navegador da web. Insira dois números nos campos de entrada e clique nos botões de operação para realizar as operações desejadas. O resultado da operação será exibido na tela.

## Código Fonte

### index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Calculator</title>
</head>
<body>
    <section class="container-calculator">
        <header class="calculator-header">
            <input type="number" autoFocus id="input"/>
        </head>

        <div class="calculator-body">
            <button class="button-clear">C</button>
            <button class="button-calc">/</button>
            <button class="button-calc">*</button>
            <button class="button-calc">-</button>
            <button class="button-calc">7</button>
            <button class="button-calc">8</button>
            <button class="button-calc">9</button>
            <button class="button-calc">+</button>
            <button class="button-calc">4</button>
            <button class="button-calc">5</button>
            <button class="button-calc">6</button>
            <button class="button-calc">.</button>
            <button class="button-calc">1</button>
            <button class="button-calc">2</button>
            <button class="button-calc">3</button>
            <button class="button-result">=</button>
            <button class="button-calc">(</button>
            <button class="button-calc">0</button>
            <button class="button-calc">)</button>
            <button class="button-delete"> << </button>
        </div>
    </section>

    <div class="toast-container">
        <span class="toast-message"></span>
    </div>

    <script src="./script.js"></script>
</body>
</html>
```

### style.css
```css
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    align-items: center;
    background-color: #333;
    display: flex;
    justify-content: center;
    height: 100vh;
    width: 100%;
}

.container-calculator {
    background-color: #585858;
    border-radius: 8px;
    height: 350px;
    width: 280px;
}

.calculator-header {
    border-bottom: 1px solid #333;
    margin: 1rem 1rem 0;
    padding-bottom: 1rem;
}

.calculator-header input {
    border: none;
    font-size: 1.2rem;
    padding: 0.2rem;
    outline: none;
    width: 100%;
}

.calculator-header input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.calculator-body {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    margin: 0.8rem 0;
}

.calculator-body button {
    border-radius: 4px;
    cursor: pointer;
    height: 40px;
    width: 40px;
}

.calculator-body button:hover {
    transform: scale(1.1);
}

.toast-container {
    background-color: #f00;
    border-radius: 4px;
    bottom: 1%;
    left: -100%;
    padding: 8px;
    position: absolute;
    transition: all 0.5s;
    width: 18%;
}

.toast-container.true {
    left: 1%;
}
```

## script.js
```js
const inputCalculator = document.querySelector('#input');
const buttonCalc = document.querySelectorAll(".button-calc");
const buttonResult = document.querySelector(".button-result");
const buttonDelete = document.querySelector(".button-delete");
const buttonClear = document.querySelector(".button-clear");

for (let index = 0; index < buttonCalc.length; index++) {
    buttonCalc[index].addEventListener("click", (e) => {
        inputCalculator.value += e.target.innerHTML;
    })
}

buttonResult.addEventListener("click", () => {
    try {
        const result = eval(inputCalculator.value);
        inputCalculator.value = result;
        
    } catch (error) {
        const toastContainer = document.querySelector(".toast-container");
        const toastMessage = document.querySelector(".toast-message");
        toastMessage.innerHTML = "Conta invalida";
        toastContainer.classList.add("true");

        setTimeout(() => {
            toastContainer.classList.remove("true");
        }, 5000)
    }
});

buttonDelete.addEventListener("click", () => {
    inputCalculator.value = inputCalculator.value.slice(0, inputCalculator.value.length - 1);
});

buttonClear.addEventListener("click", () => {
    inputCalculator.value = "";
});
```