
- So whenever you are going to start building any project just see what your user can intereact with!
- Those will be the things that you will be building upon

- Add todo
    - User will type in todo and click add todo button.
    - This should then add todo to the list above.
- Delete todo
- Complete todo
- Save Todos
- Load Todos 

- Steps
    - Select the form
    - Get the todo input
    - We will add EL on form to submit todo! We will prevent default reload now.
    - we will select list
    - we will then renderTodo
    - then we will clear out the input box

    - Render Todo Function
    - We will be using template to render the html
    - We will be cloning the template using content.cloneNode(true)
    - So when we write a block of code or feature we should always check for edge cases. 
    - in our case it is adding blanktodos.

    - Save Todos
        - First we will create a global array to store our todos in the array and then we can store them in localstorage through a function.
        - So first we will push our todo item in todos array then we will call save todos.
        - saveTodos will set localStorage as it needs a key value pair what we can do is create a key which will help us keep our data in a systematic format
        - so we will create a key prefix that will be related to our application
        ```js
        const LOCAL_STORAGE_PREFIX = "ADVANCED_TODO_LIST"
        const TODOS_STORAGE_KEY = `${LOCAL_STORAGE_PREFIX}-todos`
        ```
        - also to save our key's as in array format we cannot save it directly we first will have to convert our array into a string and then only we can save it!