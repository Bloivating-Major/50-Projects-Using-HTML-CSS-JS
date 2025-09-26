import items from './items.json';
import { addToCart } from './shoppingCart';
import formatCurrency from './utils/formatCurrency';

const storeItemTemplate = document.querySelector('#store-item-template');
const storeItemContainer = document.querySelector('[data-store-container]');
const IMAGE_URL = "https://dummyimage.com/420x260";

export function setupStore(){
    document.addEventListener('click', (e)=>{
        if(e.target.matches('[data-add-to-cart-button]')){
            const id = e.target.closest('[data-store-item]').dataset.itemId;
            addToCart(parseInt(id));
        }
    })
    items.forEach(renderStore);
}

function renderStore(item){
    const storeItem = storeItemTemplate.content.cloneNode(true);
    const container = storeItem.querySelector("[data-store-item]");
    container.dataset.itemId = item.id;

    const name = storeItem.querySelector("[data-name]");
    name.innerText = item.name;

    const category = storeItem.querySelector("[data-category]");
    category.innerText = item.category;

    const price = storeItem.querySelector("[data-price]");
    price.innerText =  formatCurrency(item.priceCents);

    const img = storeItem.querySelector("[data-image]");
    img.src = `${IMAGE_URL}/${item.imageColor}/${item.imageColor}`

    storeItemContainer.appendChild(storeItem);
}