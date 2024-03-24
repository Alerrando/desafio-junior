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
    e.target[0].value = "";
    containerModal.classList.remove('true');
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
  if(window.confirm(`Tem certeza que deseja excluir a tarefa ${todoArray.find(todo => todo.id === id).description}?`)) {
    todoArray = todoArray.filter(todo => todo.id !== id);
    renderTable();
  }
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
