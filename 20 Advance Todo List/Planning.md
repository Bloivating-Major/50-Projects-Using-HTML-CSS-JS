
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

    - Load Todos
        - we will create a function to load todos.
        - first we will get out todos using the storage key that we have used (todoString)
        - then we will return it using JSON.parse() which will eventually convert it into an array and when we won't have any todos then it will give us an error so what we will do is use short curcit to make this work
        - also now what we can do is instead of saving todos in an array we can call loadTodos function over it
        - and what we can do is loop over todos using forEach to render the loaded todos
        - now we find that we are just saving todos as text but we also want other information about our todo such as is it completed or not?
        - so for that purpose we will create a newTodo object inside which we will save our info for todos. 
        - Then we will acess it accordingly!
        - Now that we have refactored our code what we will be doing is creating a feature that will actually check whether todo is completed or not

        - So to know that our todo is checked or not we can add an event listener on list so that we can check for an event change on todo item
        - First we will target the list element 
                    - How exactly do we do it is using e.target.matches() by this we can check if the list item is checked or not
        - So what do we want to do 
            1. Get the todo that is clicked on
                - So to get the todo we can find it through name but what if the name is duplicated?
                - Then we need some sort of an id to identify a todo as unique
                - For that what we can do is create a id property on our todo object and then use a new Date().valueOf().toString() this will give us the milliseconds of the current time and then simply we can call toString() to covert it into a string.
                - Now how do we reference that id?
                    - we will need to save that id on our data attribute on the list item
                    - so what we can do is create a dataset over our list item which is present on the template with something like data-todo-id and store our id on that so we can access that id and check whether the todo state is checked or unchecked
                    - Now that we have saved the id what we can do is now move to our getting todos
                    - how do we get the id out what we can do is get the parent by e.target.closest() parent an then from parent we can get the todoId this way we can find the todo using the id.
            2. Toggle the complete property to be equal to the checkbox value
            3. Save our updated todo