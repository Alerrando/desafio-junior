# Verificar Senha

Este diretório contém uma solução para o exercício "Verificar Senha".

## Descrição do Exercício

Escreva um programa que peça ao usuário uma senha. A senha deve ter no mínimo 8 caracteres e conter pelo menos uma letra maiúscula, uma letra minúscula e um número. Valide a senha e informe ao usuário se ela é válida ou não.

## Solução

A solução consiste em uma página HTML (index.html), um arquivo de script JavaScript (script.js) e um arquivo de estilo CSS (style.css). O programa solicita ao usuário que digite uma senha, e irá verificar se a senha possui 8 caracteres, contem no minímo uma letra maiúscula e um número.

## Código Fonte

### index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Verify Password</title>
</head>
<body>
    <aside class="aside-container">
    
    </aside>

    <main class="main-container">
        <div class="container">
            <header class="container-header">
                <h1>Validate Password</h1>
            </header>
    
            <form>
                <div class="container-body">
                    <div class="container-input">
                        <div class="input-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" placeholder="Insira seu email">
                        </div>

                        <div class="input-group">
                            <label for="password">Password*</label>
                            <input type="password" id="password" placeholder="Insira sua senha">
                        </div>
                    </div>
                    <button type="button" class="button-verify" onclick="handleButton()">Verificar Senha</button>
                </div>
            </form>
    
            <footer class="container-footer">
                <div class="footer-separator">
                    <div class="separator"></div>
                    <span>//</span> 
                    <div class="separator"></div> 
                </div>

                <div class="footer-terms-privacy">
                    <span class="span-response">Terms of Use</span>
                    <span class="span-response">Privacy Policy</span>
                </div>
            </footer>
        </div>
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
    display: flex;
    height: 100vh;
    width: 100%;
}

.main-container {
    align-items: center;
    background-color: #333333;
    border: 1px solid rgba(255, 255, 255, 0.18);
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: 16px;
    width: 50%;
}

.container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 16px;
    height: 90%;
    width: 80%;
}

.container .container-header {
    padding: 8px 0;
    text-align: center;
    width: 100%;
}

.container form {
    width: 100%;
}

form .container-body,
.container-body .container-input {
    display: flex;
    flex-direction: column;
    gap: 22px;
}

.input-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
}

.input-group label {
    font-size: 14px;
    font-weight: bold;
}

.input-group input {
    border: none;
    border-radius: 4px;
    padding: 8px 6px;
    outline: none;
}

.container-body button {
    background-color: transparent;
    border: 1px solid rgb(22 163 74);
    border-radius: 4px;
    color: rgb(22 163 74);
    cursor: pointer;
    padding: 8px 4px;
    transition: all 0.5s;
    width: 100%;
}

.container-body button:hover {
    background-color: rgb(22 163 74 / 80%);
    color: white;
}

.container-footer {
    display: flex;
    flex-direction: column;
    gap: 22px;
    width: 100%;
}

.footer-separator {
    align-items: center;
    display: flex;
    gap: 16px;
    width: 100%;
}

.footer-separator .separator {
    border-bottom: 2px solid #fff;
    width: 100%;
}

.separator span {
    font-weight: 700;
}

.footer-terms-privacy {
    text-align: center;
    width: 100%;
}

.footer-terms-privacy .span-response:first-child {
    border-right: 1px solid #fff;
    padding-right: 8px;
    margin-left: auto;
    width: fit-content;
}

.footer-terms-privacy .span-response:last-child {
    padding-left: 8px;
}

.aside-container {
    background-color: #5e5be5;
    height: 100%;
    width: 50%;
}

.toast-container {
    background-color: #fff;
    border-radius: 4px;
    bottom: 1%;
    left: -100%;
    padding: 8px 16px;
    position: absolute;
    transition: all 0.5s;
    width: 20%;
}

.toast-container::before {
    background-color: #f00;
    bottom: 0;
    content: "";
    height: 4px;
    left: 0;
    position: absolute;
    width: 100%;
}

.toast-container span {
    color: #f00;
}

.toast-container.true {
    left: 1%;
}
```

### script.js
```js
const passwordInput = document.querySelector("#password");

passwordInput.addEventListener("keyup", (e) => {
    verifyPassword(e.target);
})

function verifyPassword(e){
    if(e.value === 0){
        e.style.border = "1px solid #fff"
    }

    if(e.value.length < 8 || /^[A-Z]*$/.test(e.value) || /^[a-z]*$/.test(e.value) || !/.*[0-9].*/.test(e.value)){
        e.style.border = "2px solid #f00";
        return true;
    }
    
    e.style.border = "1px solid #fff"
}

function handleButton(){
    if(verifyPassword(passwordInput)){
        const toastContainer = document.querySelector(".toast-container");
        const toastMessage = document.querySelector(".toast-message");
        toastMessage.innerHTML = "A senha tem que ter no mínimo 8 caracteres, pelo menos uma letra maiúscula, uma letra minuscula e um número";
        toastContainer.classList.add("true");
    
        setTimeout(() => {
            toastContainer.classList.remove("true");
        }, 5000)
    }
}
```