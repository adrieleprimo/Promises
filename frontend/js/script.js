const tbody = document.querySelector('tbody');

const fetchPromises = async ()=>{
    const response = await fetch('http://localhost:8081/promises');
    const promises = await response.json();
    return promises; 
}

const createElement = (tag, innerText = '', innerHTML = '')  =>{
    const element = document.createElement(tag);
    
    if(innerText){
        element.innerText = innerText;
    }
    if(innerHTML){
        element.innerHTML = innerHTML;
    }
    return element;
}

const createRow =  (promise) =>{
    const {id, title, created_at, status}= promise;

    const tr = document.createElement('tr');
    const tdTitle = createElement('td', title);
    const tdCreated_at = createElement('td', created_at);
    const tdStatus = createElement('td');
    const tdActions = createElement('td');
    
    const select = createSelect(status);

    const editButton = createElement('button','' ,'<span class="material-symbols-outlined"> edit_square</span>');
    const deleteButton = createElement('button', '','<span class="material-symbols-outlined"> delete_forever </span>');
    editButton.classList.add('btn-action');
    deleteButton.classList.add('btn-action');

    tdStatus.appendChild(select);

    tdActions.appendChild(editButton);
    tdActions.appendChild(deleteButton);

    tr.appendChild(tdTitle);
    tr.appendChild(tdCreated_at);
    tr.appendChild(tdStatus);
    tr.appendChild(tdActions);
    return tr;
}

const createSelect = (value)=>{
    const options = `
    <option value="pending">Pending</option>
    <option value="in progress">In progress</option>
    <option value="concluded">Concluded</option>`;

    const select = createElement('select', '', options);
    select.value = value
    return select;
}

const loadPromises = async ()=>{
    const promises = await fetchPromises();

    promises.forEach((promise)=>{

    });
    }

createRow(task);

