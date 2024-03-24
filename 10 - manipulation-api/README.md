# Manipulação de API

Este diretório contém uma solução para o exercício "Manipulação de API".

## Descrição do Exercício

Utilizando a API REST do GitHub, desenvolva um script que faça uma requisição para obter os repositórios de um usuário e exiba as informações na tela. O usuário deve informar o nome do usuário do GitHub. O script deve exibir o nome, descrição, linguagem e quantidade de estrelas de cada repositório.

## Solução

A solução consiste em uma página HTML (index.html), um arquivo de script JavaScript (script.js). O usuário insere o nome do usuário do Github e clica em "Buscar", o programa irá fazer a busca de todos os repositórios do usuário e irá mostrar na tela, junto com o nome do Repositório, descrição, linguagem e quantidade de estrelas.

## Código Fonte

### index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Maniuplation API</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <main class="main-container">
        <header class="main-header">
            <form action="">
                <div class="input-header">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                      </svg>
                    <input type="text" id="search" placeholder="Insira o nome">
                </div>
                
                <button class="btn">Buscar</button>
            </form>
        </header>

        <section class="main-body">
            <h1></h1>
            <ul class="user-list">

            </ul>
        </section>
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
    display: flex;
    justify-content: center;
    height: 100vh;
    width: 100%;
}

.main-container {
    display: flex;
    flex-direction: column;
    height: 90%;
    gap: 1rem;
    width: 40%;
}

.main-header {
    border-bottom: 1px solid #d5d5d8;
    height: auto;
    padding: 8px 0;
    width: 100%;
}

.main-header form {
    gap: 8px;
}

.main-header form,
form .input-header {
    align-items: center;
    display: flex;
    width: 100%;
}

.input-header {
    border: 1px solid #d5d5d8;
    border-radius: 8px;
    gap: 12px;
    padding: 4px 6px;
}

.input-header input {
    background-color: transparent;
    border: none;
    outline: none;
    width: 100%;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
}

form .btn {
    background-color: rgb(22 163 74);
    border: none;
    border-radius: 6px;
    color: white;
    cursor: pointer;
    height: 100%;
    padding: 6px 12px;
    transition: background-color 0.5s;
}

form .btn:hover {
    background-color: rgb(21 128 61);
}

.main-container .main-body {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 100%;
}

.container-repository {
    box-shadow:
        0 10px 15px -3px rgb(0 0 0 / 0.1),
        0 4px 6px -4px rgb(0 0 0 / 0.1);
    border: 1px solid #f2f2f2;
    border-radius: 6px;
    display: flex;
    height: min-content;
    gap: 1.5rem;
    padding: 12px 1rem;
    width: 100%;
}

.container-repository > svg {
    height: 100%;
    margin: auto 0;
    width: 2rem;
}

.container-repository .repository-infos {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 8px;
    width: 100%;
}

.repository-infos .repository-description {
    font-size: 14px;
    opacity: 0.6;
}

.repository-infos .infos {
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.infos .infos-lang-stars {
    display: flex;
    gap: 12px;
}

.stars {
    align-items: center;
    display: flex;
    gap: 4px;
}
```

### script.js
```js
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    getRepositories(e.target[0].value);
})

async function getRepositories(name){
    const response = await fetch(`https://api.github.com/users/${name}/repos`)
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => err)

    showRepositories(response);
}

function showRepositories(response){
    const userList = document.querySelector(".user-list");

    if(response.length > 0){
        const h1 = document.querySelector("h1");
        h1.innerHTML = `Repositórios do usuário: ${response[0].owner.login}`
        response.forEach((repository) => {
            userList.innerHTML += `
                <div class="container-repository">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-journal-bookmark-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M6 1h6v7a.5.5 0 0 1-.757.429L9 7.083 6.757 8.43A.5.5 0 0 1 6 8z"/>
                        <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"/>
                        <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"/>
                    </svg>
        
                    <div class="repository-infos">
                        <div class="infos">
                            <h3 class="repository-name">${repository.name}</h3>
        
                            <div class="infos-lang-stars">
                                <span>${repository.language == null ? "Sem linguagem" : repository.language}</span>
        
                                <div class="stars">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                    <span>${repository.stargazers_count}</span>
                                </div>
                            </div>
                        </div>
                        <p class="repository-description">${repository.description === null ? "Sem descrição" : repository.description}</p>
                    </div>
                </div>
            `
        })
    }
    else{
        userList.innerHTML = "<h1>Nenhum repositório encontrado</h1>"
    }
}
```