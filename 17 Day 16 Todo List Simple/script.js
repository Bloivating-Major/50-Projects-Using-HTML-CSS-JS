// 1. Select All Elements.
const list = document.querySelector('#list');
const form = document.querySelector('#new-item-form');
const input = document.querySelector('#item-input');

// 2. When I Submit the Form add a new element. 
form.addEventListener('submit', (event)=>{
    // Stops by default submition of form
    event.preventDefault();

    // 1. Create a new item
    const item = document.createElement('div');
    item.innerText = input.value;
    item.classList.add('list-item');
    
    // 2. Add that item to the list.
    list.appendChild(item);

    // 3. Clear Input
    input.value = '';

    // 4. Setup event listener to delete item when clicked.
    item.addEventListener('click', ()=>{
        item.remove();
    })
})
