# Maior e Menor entre Três Números

Este diretório contém uma solução para o exercício "Maior e Menor entre Três Números".

## Descrição do Exercício

Escreva um programa que peça ao usuário três números. Determine o maior e o menor número entre os três e exiba-os na tela.

## Solução

A solução consiste em uma página HTML (index.html), um arquivo de script JavaScript (script.js) e um arquivo de estilo CSS (style.css). O programa solicita ao usuário três números e, em seguida, calcula e exibe o maior e o menor número entre os três.

## Instruções para Executar

1. Abra o arquivo `index.html` em um navegador da web.
2. Insira três números nos campos de entrada.
3. Clique no botão "Calcular".
4. O programa exibirá o maior e o menor número entre os três acima dos campos de entrada.

## Código Fonte

### index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bigger or Smaller</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <main class="container">
        <header class="container-header">
            <div class="header-bigger">
                <span class="header-title bigger"></span>
            </div>

            <div class="header-smaller">
                <span class="header-title smaller"></span>
            </div>
        </header>

        <div class="container-body">
            <div class="container-input">
                <input type="text" id="number">
            </div>
            <div class="container-input">
                <input type="text" id="number">
            </div>
            <div class="container-input">
                <input type="text" id="number">
            </div>
            
            <button class="button-calc">Calcular</button>
        </div>
    </main>

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
    background-color: #111;
    display: flex;
    justify-content: center;
    height: 100vh;
    width: 100%;
}

.container {
    background-color: #333;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 45%;
    padding: 16px 8px;
    width: 35%;
}

.container-header,
.container-header .header-bigger,
.container-header .header-smaller {
    align-items: center;
    display: flex;
    justify-content: center;
}

.container-header {
    gap: 1rem;
    height: 60%;
    width: 100%;
}

.container-header .header-bigger,
.container-header .header-smaller {
    border-radius: 100%;
    height: 75%;
    width: 100%;
}

.header-bigger {
    background-color: rgb(22 163 74);
}

.header-smaller {
    background-color: rgb(220 38 38);
}

.container-header .header-bigger span,
.container-header .header-smaller span {
    color: white;
    font-size: 0.8rem;
}

.container-body {
    align-items: center;
    display: flex;
    justify-content: space-between;
    gap: 16px;
    flex-wrap: wrap;
    width: 100%;
}

.container-body .container-input {
    border: 1px solid #666;
    border-radius: 4px;
    padding: 2px 4px;
    width: 45%;
}

.container-input input {
    background-color: transparent;
    border: none;
    color: #fff;
    height: 100%;
    outline: none;
    width: 100%;
}

.button-calc {
    background-color: rgb(22 163 74);
    border: none;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    padding: 4px;
    width: 45%;
}

.button-calc:hover {
    background-color: rgb(22 163 74 / 80%);
}

@media screen and (min-width: 768px) {
    .container {
        height: 50%;
        width: 25%;
    }

    .container-header {
        height: 65%;
        margin: 0 auto;
        width: 100%;
    }

    .container-header .header-bigger span,
    .container-header .header-smaller span {
        color: white;
        font-size: 1rem;
    }
}
```

### script.js
```js
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
```