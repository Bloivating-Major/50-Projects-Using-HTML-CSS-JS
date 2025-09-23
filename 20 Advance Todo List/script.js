const form = document.querySelector('#new-todo-form');
const todoInput = document.querySelector('#todo-input');
const list = document.querySelector("#list");
const template = document.querySelector('#list-item-template')

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const todoText = todoInput.value;
    if(todoText.trim() === "") return;
    renderTodo(todoText);
    todoInput.value = "";
})

function renderTodo(todoText){
    const templateClone = template.content.cloneNode(true);
    const listItem = templateClone.querySelector('[data-list-item-text]')
    listItem.textContent = todoText.trim();
    list.appendChild(templateClone);
}