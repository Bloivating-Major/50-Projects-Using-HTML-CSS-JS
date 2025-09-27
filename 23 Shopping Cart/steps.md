- Setup Parcel

- Requirements
1. Populating Data in Store.
     
2. Making the full working of shopping cart feature.

- So to get started what we will be doing is setup the store.js file but instead of making multiple .js files for multiple .html files what we can do is create a single .js file and then take our store.js file and add it into the single .js file.

- ok so now once we have done the setup what we will be doing is creating a store.js file and script.js file

# Store.js

- create a function setupStore(){} this is the fun which will do everything.
- then we will import our items from .json file.

- so to setup our store what we will be doing is creating a template out of it.
- now how do create a template you see first what actually you have to build?
- we have to populate data of json in our store but what actually it means it means that we should be able to see store items
- how do you get those store items by creating a template of each item

1. template creation
    - create a template tag and give it an id of store-item-template
    - then inside that we will be using the code for 1 single item that we have already hard coded
    - and finally we will start putting data attributes to each and every property that we have on our json data
        - data-store-item : id
        - data-image : imageColor
        - data-name : name
        - data-category : category
        - data-price : priceCents
    - finally remove the manual and hardcoded values that were assigned to html template

2. Move to Store.js and then start further implementation
    - select the storeItemTemplate by id
    - create a fun renderStore which will take item as a param
    - use the fun renderStore in setupStore while iterating over items
    - inside our fun renderStore we will create a storeItem template var using storeItemTemplate.content.cloneNode(true)
    - now we will be using a var container to access the store item
    - set the item.id to container.dataset.id
    - set up the name and add values inside name.

=1> setupStore fun <1= so in the function setupStore
- what we can do is add EV on document itself to see if any e matches our [data-add-to-cart-button] if yes then we will call addToCart() function over here with id.
- and in order to get id we will check our data-store-item attribute of the closest because we are setting the id so it will give us the id of that item.

# Script.js

- here we will import our setupStore() fun and use it.
- here we will import our setupShoppingCart() fun and use it.


- Now we will create our shoppingCart Feature
- so create a shoppingCart.js file then export the setupShoppingCart fun 
- call it in script.js

# Shopping Cart.js

- What features we can build?

1. add items to cart
2. remove items from cart
3. show/hide the cart when clicked
4. show/hide the cart button when it has no items or when it goes from 0 to 1 items
5. persist across multiple pages
6. calculate an accuratetotal
7. handle multiple of the same item in the cart

3. show/hide the cart when clicked
- Ok so now what we have to do is to perform any kind of action we need to click on the button so first we will select the button on the cart item!
    - to select the button we will use a data attribute data-cart-button 
- now you have to test on which section you will be applying the invisible class.
- and we can add a data-cart-items-wrapper on it.
- now we will select cartButton and cartItemsWrapper using those data atttributes
- and on cart button we can add an EL and toggle invisible class on the cartItemsWrapper

1. add items to cart
    - Handle Click event for adding
    - handle multiple of the same item in the cart
    - calculate an accurate total
- So now we will create addToCart(id){} fun and export it
- Now where do you store those ids we will store them into a shopping cart array at global level
- and in our fun addToCart we will push the id and quantity to shoppingCart in an object format

- Now in order to call addToCart(id) function what we will do is place some sort of global event listener over the addToCart Button we will add an data attribute data-add-to-cart-button and we will perform the operations on =1> setupStore fun <1=

- ok now how do you exactly render the item?
    - for that you have to know what does the cart item look like?
    - and then we will create a template out of it giving it an id of cart-item
    - now to select those values in the future we are step by step giving them ids so that we can use them in future.
    - data-item for main template
    - data-image for image 
    - data-name
    - data-quantity
    - data-price
    - remove the placeholders 
    - So now that we have setup the template what we can do is more forward with rendering process
    - now we will create our template clone and then select all those elements in our template item and then use it


- so what we will do now is create a feature to show and hide the cart when necessary that time only.

- so we will rename our funtion renderCart to renderCartItems and then create an another function renderCart which will call renderCart items also we want to call this function immediately when you setupShoppingCart 

- so what we will do in renderCart function that if our length of shoppingCart is 0 then we will hide cart else we will show cart
- and now inorder to hide our cart what we can do is target the cart section itself which shows all the cart related things and then target that and select it in js using data-cart attribute 

- now what we can do is target the section and add class invisible to it so that it doesn't pop up at first and then when user adds item then only show it.