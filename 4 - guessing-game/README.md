# Jogo da Adivinhação

Este diretório contém uma solução para o exercício "Jogo de Adivinhação".

## Descrição do Exercício

Crie um programa que gere um número aleatório entre 1 e 100. O usuário deve tentar adivinhar o número com o mínimo de tentativas possível. Dê dicas ao usuário, informando se o seu palpite está "acima", "abaixo" ou se ele adivinhou o número.

## Solução

A solução consiste em uma página HTML (index.html), um arquivo de script JavaScript (script.js) e um arquivo de estilo CSS (style.css). O programa solicita ao usuário que digite um valor, e vai informar ao usuário se o valor digitado é maior ou menor que o que ele digitou até ele aceitar o valor.

## Código Fonte

### index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Guessing Game</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <main class="container">
        <header class="container-header">
            <div class="header-response">
                <span class="span-response"></span>
            </div>
        </header>

        <div class="container-body">
            <div class="container-input">
                <input type="number" id="number" placeholder="Insira um número">
            </div>
            
            <button class="button-calc" onclick="verifyNumber(this)">Calcular</button>

            <span class="quant-attempts"></span>
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
.container-header .header-response {
    align-items: center;
    display: flex;
    justify-content: center;
}

.container-header {
    gap: 1rem;
    height: 60%;
    width: 100%;
}

.container-header .header-response {
    background-color: #222;
    border-radius: 100%;
    height: 100%;
    width: 70%;
}

.header-response span {
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

    .header-response span {
        color: white;
        font-size: 1rem;
    }
}

.quant-attempts {
    color: #f00;
    font-weight: 600;
}
```

### script.js
```js
const numberInput = document.querySelector("#number");
const response = document.querySelector(".span-response");
const quantAttemptedSpan = document.querySelector(".quant-attempts");
let number = 0;
let quantAttempted = 0;

function handleNumberRandom(){
    const numberRandom = Math.floor(Math.random() * 100) + 1;
    number = numberRandom;
}

function verifyNumber(e){

    if(e.innerHTML !== "Reiniciar"){
        if(numberInput.value > number){
            response.innerHTML = "O número sorteado é menor";
            quantAttempted++;
            return;
        }
    
        if(numberInput.value < number){
            response.innerHTML = "O número sorteado é maior";
            quantAttempted++;
            return;
        }
        
        if(numberInput.value == number){
            response.innerHTML = "Acertou";
            e.innerHTML = "Reiniciar";
            quantAttemptedSpan.innerHTML = `A quantidade de tentativas foi ${quantAttempted}`;
            return;
        }
    }
    
    resetInfos(e);
    handleNumberRandom();
}

function resetInfos(e){
    numberInput.value = "";
    response.innerHTML = "";
    quantAttemptedSpan.innerHTML = "";
    quantAttempted = 0;
    e.innerHTML = "Calcular";
}

window.onload = handleNumberRandom();
```