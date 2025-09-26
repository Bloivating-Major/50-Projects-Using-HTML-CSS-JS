
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

# Script.js

- here we will import our setupStore() fun and use it.