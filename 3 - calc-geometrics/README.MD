# Calculo Geométrico

Este diretório contém uma solução para o exercício "Calculo Geométrico".

## Descrição do Exercício

Crie um programa que seja capaz de calcular a área de formas geométricas.

## Solução

A solução consiste em uma página HTML (index.html), um arquivo de script JavaScript (script.js) e um arquivo de estilo CSS (style.css). O programa solicita ao usuário os valores da forma geométrica que ele quer calcular a área, podendo ser um Quadrado, Retângulo,
Triângulo ou Circulo.

## Instruções para Executar

1. Abra o arquivo `index.html` em um navegador da web.
2. Insira o valores pedidos para calcular a área da forma geométrica.
3. Clique no botão "Calcular".
4. O programa exibirá a área da forma geométrica.

## Código Fonte

### index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <title>Area of Geometric Shapes:</title>
</head>
<body>
    <nav>
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
          <button class="nav-link active" id="nav-square-tab" data-bs-toggle="tab" data-bs-target="#nav-square" type="button" role="tab" aria-controls="nav-square" aria-selected="true">Quadrado</button>
          <button class="nav-link" id="nav-rectangle-tab" data-bs-toggle="tab" data-bs-target="#nav-rectangle" type="button" role="tab" aria-controls="nav-rectangle" aria-selected="false">Retângulo</button>
          <button class="nav-link" id="nav-triangle-tab" data-bs-toggle="tab" data-bs-target="#nav-triangle" type="button" role="tab" aria-controls="nav-triangle" aria-selected="false">Triângulo </button>
          <button class="nav-link" id="nav-circle-tab" data-bs-toggle="tab" data-bs-target="#nav-circle" type="button" role="tab" aria-controls="nav-circle" aria-selected="false">Círculo </button>
        </div>
      </nav>
      <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane fade show active" style="width: 35%!important;" id="nav-square" role="tabpanel" aria-labelledby="nav-square-tab">
          <div class="card mx-2 my-3 px-2 gap-4">
              <div class="card-body align-items-center input-group gap-4 px-0">
                <input type="text" class="form-control rounded-2" style="width: 40%!important;" placeholder="AreaX" aria-label="AreaX" aria-describedby="basic-addon2" id="area-x">
                <input type="text" class="form-control rounded-2" style="width: 40%!important;" placeholder="AreaY" aria-label="AreaY" aria-describedby="basic-addon2" id="area-y">
                
                <button type="button" id="calc-square" class="btn btn-success h-25 py-2 px-4 rounded-3">Calcular</button>
              </div>

              <div class="card-footer bg-transparent p-0 border-0">
                <span class="result-calc-square text-danger"></span>
              </div>
          </div>

        </div>
        <div class="tab-pane fade" id="nav-rectangle" style="width: 35%!important;" role="tabpanel" aria-labelledby="nav-rectangle-tab">
          <div class="card mx-2 my-3 px-2 gap-4">
            <div class="card-body align-items-center input-group gap-4 px-0">
              <input type="text" class="form-control rounded-2" style="width: 40%!important;" placeholder="Comprimento" aria-label="length" aria-describedby="basic-addon2" id="length">
              <input type="text" class="form-control rounded-2" style="width: 40%!important;" placeholder="Largura" aria-label="width" aria-describedby="basic-addon2" id="width">
              
              <button type="button" id="calc-rectangle" class="btn btn-success h-25 py-2 px-4 rounded-3">Calcular</button>
            </div>

            <div class="card-footer bg-transparent p-0 border-0">
              <span class="result-calc-rectangle text-danger"></span>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="nav-triangle" style="width: 35%!important;" role="tabpanel" aria-labelledby="nav-triangle-tab">
          <div class="card mx-2 my-3 px-2 gap-4">
            <div class="card-body align-items-center input-group gap-4 px-0">
              <input type="text" class="form-control rounded-2" style="width: 40%!important;" placeholder="Base" aria-label="base" aria-describedby="basic-addon2" id="base">
              <input type="text" class="form-control rounded-2" style="width: 40%!important;" placeholder="Altura" aria-label="height" aria-describedby="basic-addon2" id="height">
              
              <button type="button" id="calc-triangle" class="btn btn-success h-25 py-2 px-4 rounded-3">Calcular</button>
            </div>

            <div class="card-footer bg-transparent p-0 border-0">
              <span class="result-calc-triangle text-danger"></span>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" style="width: 35%!important;" id="nav-circle" role="tabpanel" aria-labelledby="nav-circle-tab">
          <div class="card mx-2 my-3 px-2 gap-4">
            <div class="card-body align-items-center input-group gap-4 px-0">
              <input type="text" class="form-control rounded-2" style="width: 40%!important;" placeholder="Área" aria-label="area" aria-describedby="basic-addon2" id="area">
              
              <button type="button" id="calc-circle" class="btn btn-success h-25 py-2 px-4 rounded-3">Calcular</button>
            </div>

            <div class="card-footer bg-transparent p-0 border-0">
              <span class="result-calc-circle text-danger"></span>
            </div>
          </div>
        </div>
      </div>
    
    <script src="./script.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>
```

### script.js
```js
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

```