const tbody = document.querySelector('tbody');
const addForm = document.querySelector('.add-form');
const inputPromise = document.querySelector('.input-promise');

const fetchPromises = async ()=>{
    const response = await fetch('http://localhost:8081/promises');
    const promises = await response.json();
    return promises; 
}

const addPromise = async(event)=>{
    event.preventDefault(); 

    const promise = {title:inputPromise.value}

    await fetch('http://localhost:8081/promises',{
        method:'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(promise)
    });
    loadPromises();
    inputPromise.value = '';
}

const deletePromise = async(id)=>{
    await fetch(`http://localhost:8081/promises/${id}`, {
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json',
        },
    });
    loadPromises();
}

const updatePromise = async(id, title, status)=>{
    await fetch(`http://localhost:8081/promises/${id}`,{
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({title, status})
    });
    document.dispatchEvent(new CustomEvent('promiseUpdated', {detail: {id, title, status}}));
   
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
    const tdCreated_at = createElement('td', formatDate(created_at));
    const tdStatus = createElement('td');
    const tdActions = createElement('td');
    
    const select = createSelect(status);

    select.addEventListener('change', (event)=> {
        const newStatus = event.target.value;
        updatePromise(id, title, newStatus);
    });

    const editButton = createElement('button','' ,'<span class="material-symbols-outlined"> edit_square</span>');
    const deleteButton = createElement('button', '','<span class="material-symbols-outlined"> delete_forever </span>');

    const editForm = createElement('form');
    const editInput = createElement('input');
    
    editInput.value = title;
    editForm.appendChild(editInput);

    editForm.addEventListener('keyup', (event)=>{
       event.preventDefault();
        updatePromise(id, editInput.value, status);   
    });

    editButton.addEventListener('click', ()=>{
        tdTitle.innerText = '';
        tdTitle.appendChild(editForm);
    });

    editButton.classList.add('btn-action');
    deleteButton.classList.add('btn-action');

    deleteButton.addEventListener('click', ()=>deletePromise(id));

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

const loadPromises = async()=>{
    const promises = await fetchPromises();
    tbody.innerHTML = '';

    promises.forEach((promise)=>{
        const tr = createRow(promise);
        tbody.appendChild(tr);
    });
}

const formatDate = (dateUTC)=>{
    const options = {dateStyle: 'long', timeStyle: 'short'};
    const date = new Date(dateUTC).toLocaleString('en',options);
    return date;
}

addForm.addEventListener('submit', addPromise);
loadPromises();