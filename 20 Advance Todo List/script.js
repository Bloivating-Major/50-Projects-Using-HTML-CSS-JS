const form = document.querySelector('#new-todo-form');
const todoInput = document.querySelector('#todo-input');
const list = document.querySelector("#list");
const template = document.querySelector('#list-item-template')
const LOCAL_STORAGE_PREFIX = "ADVANCE_TODO_LIST";
const TODOS_STORAGE_KEY = `${LOCAL_STORAGE_PREFIX}-todos`;
const todos = loadTodo();
todos.forEach(renderTodo);

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const todoText = todoInput.value;
    if(todoText.trim() === "") return;
    todos.push(todoText);
    renderTodo(todoText);
    saveTodo();
    todoInput.value = "";
})

function renderTodo(todoText){
    const templateClone = template.content.cloneNode(true);
    const listItem = templateClone.querySelector('[data-list-item-text]')
    listItem.textContent = todoText.trim();
    list.appendChild(templateClone);
}

function saveTodo(){
    localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos));
}

function loadTodo(){
    const todoString = localStorage.getItem(TODOS_STORAGE_KEY);
    return JSON.parse(todoString) || [];
}