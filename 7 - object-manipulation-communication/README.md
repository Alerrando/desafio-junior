# Manipulação e Comunicação de Objetos

Este diretório contém uma solução para o exercício "Manipulação e Comunicação de Objetos".

## Descrição do Exercício

Crie um programa que conecte controles de marcas diferentes (LG, Samsung, Sony, etc) a uma ou mais TVs. O programa deve permitir a seleção de um controle e a comunicação com a TV para ligar e desligar. As TVs e controles devem ser representados por objetos, e a comunicação entre eles deve ser feita por métodos. O programa deve exibir na tela as ações realizadas e o estado atual da TV. Caso o controle selecionado não seja compatível com a TV, o programa deve exibir uma mensagem de erro.

## Solução

A solução consiste em uma página HTML (index.html), um arquivo de script JavaScript (script.js) e um arquivo de estilo CSS (style.css). O usuário clica seleciona qual a marca do controle ele quer, e ao clicar na TV com a mesma marca ela liga e desliga, caso ele tente ligar ou desligar uma TV com uma marca diferente, irá apresentar uma mensagem avisando que não é possivel

## Código Fonte

### index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <title>Object Manipulation and Communication</title>
</head>
<body>
    <main class="main-container">
        <header class="header-main-container">
            <div class="title-header">
                <h1>Tvs</h1>
            </div>

            <div class="header-body">
                <div class="container-input-group">
                    <span>Controle Remoto</span>
        
                    <select id="control">
                      <option value="samsung">
                          Samsung
                      </option>
                      
                      <option value="LG">
                          LG
                      </option>
                    </select>
                  </div>
            </div>
        </header>

        <section class="main-body">
            <div class="tvs-list">
            </div>
        </section>
    </main>

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
    height: 100vh;
    width: 100%;
}

.main-container,
.header-main-container {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.header-main-container .title-header {
    background-color: #88c8bc;
    color: white;
    padding: 8px 0;
    text-align: center;
    width: 100%;
}

.header-main-container .header-body {
    align-items: center;
    border: 1px solid rgb(161 161 170);
    display: flex;
    justify-content: flex-end;
    padding: 8px 5%;
    width: 100%;
}

.container-input-group {
    align-items: center;
    display: flex;
    justify-content: center;
    gap: 16px;
}

.container-input-group span {
    font-size: 1.1rem;
    font-weight: 500;
}

.container-input-group #control {
    border: 1px solid #c2c2c2;
    font-size: 1rem;
    padding: 12px 6px;
    width: auto;
}

.main-container .main-body {
    height: 75vh;
    width: 100%;
}

.main-body .tvs-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    height: inherit;
    margin: 0 auto;
    padding: 16px 0;
    width: 90%;
}

.tvs-list .tv {
    border: 20px solid #444;
    border-radius: 6px;
    height: 45%;
    position: relative;
    width: 40%;
}

.tv.on {
    background-color: #222;
}

.tv span {
    bottom: -11%;
    color: #fff;
    margin: 0 auto;
    position: absolute;
    text-align: center;
    width: 100%;
}

.toast-container {
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    bottom: 1%;
    left: -100%;
    padding: 8px 6rem 8px 1rem;
    position: absolute;
    transition: all 0.5s;
    width: auto;
}

.toast-container::before {
    bottom: 0;
    content: "";
    height: 4px;
    left: 0;
    position: absolute;
    width: 100%;
}

.toast-container.true span {
    color: #0f0;
}

.toast-container.false span {
    color: #f00;
}

.toast-container.true::before {
    background-color: #0f0;
}

.toast-container.false::before {
    background-color: #f00;
}

.toast-container.true,
.toast-container.false {
    left: 1%;
}
```

### script.js
```js
class TvSamsung {
    #brand = "Samsung";
    #connect;

    constructor(brand, connect) {
        this.#brand = brand;
        this.#connect = connect;
    }

    getBrand() {
        return this.#brand;
    }

    setBrand(brand) {
        this.#brand = brand;
    }

    getConnect() {
        return this.#connect;
    }

    setConnect(connect) {
        this.#connect = connect;
    }

    toConnectTv(brand) {
        if (brand.toLowerCase() === this.getBrand().toLowerCase()) {
            this.setConnect(true);
            return {
                message: "TV Ligada",
                status: true,
            };
        }
        return {
            message: `O controle da marca ${brand} não pode ligar essa TV`,
            status: false,
        };
    }

    toOffTv(brand) {
        if (brand.toLowerCase() === this.getBrand().toLowerCase()) {
            this.setConnect(false);
            return {
                message: "TV Desligada",
                status: true,
            };
        }
        return {
            message: `O controle da marca ${brand} não pode desligar essa TV`,
            status: false,
        };
    }
}

class TvLg extends TvSamsung {
    constructor() {
        super("LG", false);
    }
}

class ControlTv {
    #brand;

    constructor(brand) {
        this.#brand = brand;
    }

    getBrand() {
        return this.#brand;
    }

    setBrand(brand) {
        this.#brand = brand;
    }
}

const tvs = [];

document.addEventListener("click", (e) => {
    if (e.target.getAttribute("data-id")) {
        const selectControl = document.querySelector("#control").value;
        const id = e.target.getAttribute("data-id");
        let response = {};

        if (tvs[id].getBrand().toLowerCase() === selectControl.toLowerCase()) {
            e.target.classList.toggle("on");
        }

        if (tvs[id].getConnect()) {
            response = tvs[id].toOffTv(selectControl);
        } else {
            response = tvs[id].toConnectTv(selectControl);
        }

        toastMessageEvent(response);
    }
});

function toastMessageEvent(response) {
    const toastContainer = document.querySelector(".toast-container");
    const toastMessage = document.querySelector(".toast-message");

    toastContainer.classList.remove("true", "false");
    toastMessage.innerHTML = response.message;
    toastContainer.classList.add(response.status ? "true" : "false");

    setTimeout(() => {
        toastContainer.classList.remove("true", "false");
    }, 5000);
}

function createTv() {
    Array.from({ length: 4 }).forEach((__, index) => {
        const tv = index < 2 ? new TvSamsung("Samsung", false) : new TvLg("LG", false);
        tvs.push(tv);
    });

    createTvsList();
}

function createTvsList() {
    const tvsList = document.querySelector(".tvs-list");

    tvs.forEach((tv, index) => {
        const div = document.createElement("div");
        div.innerHTML = `<span>${tv.getBrand()}</span>`;
        div.classList.add("tv");
        div.setAttribute("data-id", index);
        tvsList.appendChild(div);
    });
}

window.onload = createTv();
```