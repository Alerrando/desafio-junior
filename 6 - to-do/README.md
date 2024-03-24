# Lista de Tarefas

Este diretório contém uma solução para o exercício "Lista de Tarefas".

## Descrição do Exercício

Crie um programa que permita ao usuário adicionar, remover e visualizar tarefas. Cada tarefa deve ter descrição, prioridade e um status (pendente ou concluída). O programa deve permitir a navegação, ordenação e edição da lista de tarefas.

## Solução

A solução consiste em uma página HTML (index.html), um arquivo de script JavaScript (script.js) e um arquivo de estilo CSS (style.css). O usuário clica no botão "Add" e abrirá um modal, no modal o usuário digite a descrição e seleciona a prioridade da tarefa, o usuário também consegue mudar o status da tarefa de "On" para "Off" ou vice-versa, além de poder pesqusiar tarefa pela descrição.

## Código Fonte

### index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>To Do</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <main class="container-main">
      <div class="container">
        <header class="container-header">
          <h1>To do List</h1>

          <section class="container-body">
            <div class="input-group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
                />
              </svg>
              <input type="text" placeholder="Buscar" id="input-search" />
            </div>

            <button class="btn-form">
              Add
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-plus-lg"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                />
              </svg>
            </button>
          </section>
        </header>

        <table class="container-table">
          <thead>
            <tr>
              <td>Descrição</td>
              <td>Prioridade</td>
              <td>Status</td>
              <td>Ações</td>
            </tr>
          </thead>

          <tbody>
          </tbody>
        </div>
      </div>
    </main>

    <section class="container-modal">
      <div class="modal">
        <header class="header-modal">
          <h2>Cadastro de Tarefa</h2>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-x-lg"
            viewBox="0 0 16 16"
            id="close-modal"
          >
            <path
              d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"
            />
          </svg>
        </header>

        <div class="modal-form">
            <form id="form-modal-todo">

                <div class="container-input-group">
                  <span>Descrição</span>
                  <div class="input-group">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-highlighter"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M11.096.644a2 2 0 0 1 2.791.036l1.433 1.433a2 2 0 0 1 .035 2.791l-.413.435-8.07 8.995a.5.5 0 0 1-.372.166h-3a.5.5 0 0 1-.234-.058l-.412.412A.5.5 0 0 1 2.5 15h-2a.5.5 0 0 1-.354-.854l1.412-1.412A.5.5 0 0 1 1.5 12.5v-3a.5.5 0 0 1 .166-.372l8.995-8.07zm-.115 1.47L2.727 9.52l3.753 3.753 7.406-8.254zm3.585 2.17.064-.068a1 1 0 0 0-.017-1.396L13.18 1.387a1 1 0 0 0-1.396-.018l-.068.065zM5.293 13.5 2.5 10.707v1.586L3.707 13.5z"
                      />
                    </svg>
                    <input type="text" placeholder="Descrição" />
                  </div>
                </div>
      
                <div class="container-input-group">
                  <span>Prioridade</span>
      
                  <select id="priority">
                    <option value="1 - Alta prioridade">
                        1 - Alta prioridade
                    </option>
                    
                    <option value="2 - Media Prioridade">
                        2 - Media Prioridade
                    </option>

                    <option value="3 - Baixa Prioridade">
                        3 - Baixa Prioridade
                    </option>
                  </select>
                </div>
      
                <div class="modal-btn">
                  <button type="submit">Adicionar</button>
                </div>
            </form>
        </div>
      </div>
    </section>

    <script type="module" src="./script.js"></script>
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
}

.container-main {
    align-items: center;
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
}

.container {
    display: flex;
    flex-direction: column;
    gap: 32px;
    height: 85%;
    text-align: center;
    width: 40%;
}

.container-header {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.container-header .container-body,
.modal-form {
    align-items: center;
    display: flex;
    justify-content: center;
    gap: 12px;
}

.input-group {
    align-items: center;
    border: 1px solid rgb(212 212 216);
    border-radius: 8px;
    display: flex;
    gap: 6px;
    padding: 8px;
    width: 100%;
}

.input-group input {
    background: transparent;
    border: none;
    padding: 0px 4px;
    outline: none;
    width: 100%;
}

.container-body .btn-form {
    align-items: center;
    background-color: transparent;
    border: 1px solid #0369a1;
    border-radius: 8px;
    color: #0369a1;
    cursor: pointer;
    display: flex;
    justify-content: center;
    height: 100%;
    gap: 4px;
    padding: 0 16px;
    transition: all 0.5s;
}

.container-body .btn-form:hover {
    background-color: #0369a1;
    color: white;
}

.container-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

.container-table th,
.container-table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

.container-table th {
    background-color: #f2f2f2;
}

.container-table td:last-child {
    text-align: center;
}

.container-table td:nth-child(3) {
    text-align: center;
}

.container-table td:nth-child(3) .on, .container-table td:nth-child(3) .off {
    border: none;
    border-radius: 4px;
    color: #fff;
    padding: 6px 16px;
    outline: none;
}

.container-table td:nth-child(3) .on{
    background-color: #0f0;
}

.container-table td:nth-child(3) .off {
    background-color: #f00;
}

.container-table td:last-child .delete-button {
    cursor: pointer;
    height: 100%;
    width: 40%;
}

.container-table tr:nth-child(even) {
    background-color: #f2f2f2;
}

.container-table tr:hover {
    background-color: #ddd;
}

.container-modal {
    display: none;
}

.container-modal.true {
    align-items: center;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    height: 100vh;
    inset: 0;
    justify-content: center;
    position: fixed;
    width: 100vw;
}

.container-modal.true .modal {
    background-color: #fff;
    display: grid;
    gap: 16px;
    grid-template-rows: 15% 85%;
    height: 60%;
    width: 45%;
}

.modal .header-modal {
    align-items: center;
    border-bottom: 1px solid rgb(212 212 216);
    display: flex;
    justify-content: space-between;
    padding: 12px;
    width: 100%;
}

.header-modal h2 {
    font-size: 1.6rem;
}

.header-modal svg {
    cursor: pointer;
    height: 1.3rem;
    width: 1.3rem;
}

.modal-form {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 22px;
    margin: 0 auto;
    width: 95%;
}

.container-input-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
    text-align: start;
    width: 100%;
}

.container-input-group span {
    font-weight: bold;
}

.container-input-group select {
    border: 1px solid rgb(212 212 216);
    border-radius: 8px;
    padding: 6px 4px;
    outline: none;
    width: 100%;
}

.modal-btn {
    align-items: center;
    display: flex;
    justify-content: flex-end;
    width: 100%;
}

.modal-btn button {
    background-color: transparent;
    border: 1px solid rgb(22 163 74);
    border-radius: 8px;
    color: rgb(22 163 74);
    cursor: pointer;
    padding: 8px 16px;
    transition: all 0.5s;
}

.modal-btn button:hover {
    background-color: rgb(22 163 74);
    color: white;
}
```

### script.js
```js
let modal = false;
let todoArray = [];

const buttonAdd = document.querySelector('.btn-form');
const containerModal = document.querySelector('.container-modal');
const closeModal = document.querySelector('#close-modal');
const formModal = document.querySelector('#form-modal-todo');
const inputSearch = document.querySelector("#input-search");

buttonAdd.addEventListener('click', openModal);
closeModal.addEventListener('click', closeModalHandler);
formModal.addEventListener('submit', handleSubmitForm);
document.addEventListener('click', handleClick);
inputSearch.addEventListener("keyup", (e) => filterSearchDescription(e.target.value));

function openModal(e) {
  e.preventDefault();
  containerModal.classList.add('true');
}

function closeModalHandler() {
  containerModal.classList.remove('true');
}

function handleSubmitForm(e) {
  e.preventDefault();
  const description = e.target[0].value;
  const priority = e.target[1].value;

  if (isDescriptionUnique(description)) {
    const id = generateId();
    const newTodo = { id, description, priority, status: true };
    todoArray.push(newTodo);
    renderTable();
  } else {
    window.alert("Tarefa já cadastrada");
  }
}

function handleClick(e) {
  if (e.target.id === 'toggleButton') {
    toggleButtonStatus(e);
  } else if (e.target.classList.contains("delete-button")) {
    const id = e.target.getAttribute("data-id");
    handleDelete(id);
  }
}

function filterSearchDescription(value){
  renderTable(todoArray.filter((todo) => todo.description.replace(" ", "")
      .toLowerCase()
      .includes(value.replace(" ", "").toLowerCase())
  ));
}

function toggleButtonStatus(e) {
  const id = e.target.getAttribute("data-id");
  const todo = todoArray.find(todo => todo.id === id);
  todo.status = !todo.status;
  renderTable();
}

function handleDelete(id) {
  todoArray = todoArray.filter(todo => todo.id !== id);
  renderTable();
}

function isDescriptionUnique(description) {
  return !todoArray.some(todo => todo.description === description);
}

function generateId() {
  return Math.random().toString(36).replace(/[^a-z]+/g, '');
}

function renderTable(arrayAux) {
  orderPriorityAndStatus();
  const tbody = document.querySelector('tbody');
  tbody.innerHTML = '';

  if(arrayAux === undefined){
    todoArray.forEach(todo => {
      addToDoInTable(todo);
    });
  } else{
    arrayAux.forEach(todo => {
      addToDoInTable(todo);
    });
  }
}

function orderPriorityAndStatus() {
  const trueTodos = todoArray.filter(todo => todo.status === true);
  const falseTodos = todoArray.filter(todo => todo.status === false);

  trueTodos.sort((todo1, todo2) => parseInt(todo1.priority[0]) - parseInt(todo2.priority[0]));
  falseTodos.sort((todo1, todo2) => parseInt(todo1.priority[0]) - parseInt(todo2.priority[0]));

  todoArray = [...trueTodos, ...falseTodos];
}

function addToDoInTable(todo) {
  const tbody = document.querySelector('tbody');
  const tr = document.createElement('tr');

  Object.entries(todo).forEach(([key, value]) => {
    if (key !== "id") {
      const td = document.createElement('td');
      td.innerHTML = key === 'status' ? `<button id="toggleButton" data-id="${todo.id}" class="${value ? 'on' : 'off'}">${value ? 'On' : 'Off'}</button>` : value;
      tr.append(td);
    }
  });

  const td = document.createElement('td');
  td.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash delete-button" data-id="${todo.id}" viewBox="0 0 16 16">
      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
      <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
      </svg>
  `;
  tr.append(td);
  tbody.appendChild(tr);
}
```