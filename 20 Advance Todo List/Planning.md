
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