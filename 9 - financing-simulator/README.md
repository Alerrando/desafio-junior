# Simulador de Financiamento

Este diretório contém uma solução para o exercício "Simulador de Financiamento".

## Descrição do Exercício

Crie um programa que simule o calculo de financiamento de um imóvel ou veículo, baseado na tabela PRICE. O programa deve solicitar o valor total do financiamento, a quantidade de parcelas e a taxa nominal de juros anual. O programa deve exibir o valor da parcela, o valor total a ser pago, o custo efetivo total do financiamento e a taxa efetiva mensal. O programa deve permitir a simulação de diferentes cenários de financiamento.

## Solução

A solução consiste em uma página HTML (index.html), um arquivo de script JavaScript (script.js). O usuário insere o valor total do financiamento, a quantidade de Parcela e taxa nominal de juros anual (%), e ao clicar em calcular o programa faz todo o cálculo da simulação e mostra as informações para o usuário.

## Código Fonte

### index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Financing Simulator</title>
    <link rel="stylesheet" href="./style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
<body>
    <main class="w-75 h-100 card mx-auto my-4">
        <div class="card-header">
            <h1 class="card-title">Financing Simulator</h1>
        </div>
        <div class="container row row-cols-lg-2 row-cols-md-1">
            <div class="w-100">
                <form class="d-grid gap-4">
                    <div class="form-group">
                        <label for="inputValueFinancement">Valor total do financiamento</label>
                        <input type="number" class="form-control" id="inputValueFinancement" aria-describedby="valueFinancement" placeholder="Insira o valor total do financiamento">
                    </div>
                    <div class="form-group d-grid">
                        <label for="quantPortion" id="quantPortion" class="form-label">Quantidade de Parcela</label>
                        <input type="range" class="form-range" min="0" max="360" step="4" id="quantPortion" value="0" onchange="showQuantPortion(this)">
                    </div>
                    <div class="form-group">
                        <label for="nominalInterestRate">Taxa nominal de juros anual (%)</label>
                        <input type="number" class="form-control" id="nominalInterestRate" aria-describedby="InterestRate" placeholder="Insira a taxa de juros anual">
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>

            <div class="w-100 flex flex-col pt-4">
                <div class="flex flex-col">
                    <span class="font-semibold">Valor total do financiamento:</span>
                    <h1 id="valueTotalFinancement">R$0,00</h1>
                </div>

                <div class="flex py-2">
                    <span class="font-semibold">Valor das parcelas:</span>
                    <span class="text-3xl" id="valueRange">R$0,00</spa>
                </div>

                <div class="flex py-2">
                    <span class="font-semibold">Custo efetivo total do financiamento:</span>
                    <span class="text-3xl" id="totalEffectiveCostFinancing">R$0,00</spa>
                </div>

                <div class="flex py-2">
                    <span class="font-semibold">Taxa efetiva mensal</span>
                    <span class="text-3xl" id="effectiveMonthlyRate">0,0%</spa>
                </div>
            </div>
        </div>
    </main>

    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous"></script>
    <script src="./script.js"></script>
</body>
</html>
```

### script.js
```js
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
```