let modal = false;
const todoArray = [];
const buttonAdd = document.querySelector('.btn-form');
const containerModal = document.querySelector('.container-modal');
const closeModal = document.querySelector('#close-modal');
const formModal = document.querySelector('#form-modal-todo');

buttonAdd.addEventListener('click', (e) => {
  e.preventDefault();

  containerModal.classList.add('true');
});

closeModal.addEventListener('click', () => {
  containerModal.classList.remove('true');
});

formModal.addEventListener('submit', (e) => {
  e.preventDefault();
  const aux = {
    id: 0,
    description: '',
    priority: 0,
    status: false,
  };

  aux.id = todoArray.length;
  aux.description = e.target[0].value;
  aux.priority = e.target[1].value;

  todoArray.push(aux);
  addToDoInTable(aux);
});

function addToDoInTable(aux) {
    const tbody = document.querySelector('tbody');
    const tr = document.createElement('tr');
    
    Object.entries(aux).forEach((key, value) => {
        if(key[0] !== "id"){
            const td = document.createElement('td');
            td.innerHTML = key[0] === 'status' ? `<button id="toggleButton" class="${value ? 'on' : 'off'}">${value ? 'On' : 'Off'}</button>` : key[1];
            tr.append(td);
        }
    });

    const td = document.createElement('td');
    td.innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
        </svg>
    `;
    tr.append(td);
    tbody.appendChild(tr);
}

document.addEventListener('click', (e) => {
    if (e.target.id === 'toggleButton') {
      toggleButtonStatus(e);
    }
})

function toggleButtonStatus(e){
    if (e.target.classList.contains('on')) {
        e.target.classList.remove('on');
        e.target.classList.add('off');
        e.target.innerText = 'Off';
    } else {
        e.target.classList.remove('off');
        e.target.classList.add('on');
        e.target.innerText = 'On';
    }
}

function handleDelete(e){
    console.log(e);
}