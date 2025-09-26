import items from './items.json';
import formatCurrency from './utils/formatCurrency';

const cartButton = document.querySelector('[data-cart-button]');
const cartItemsWrapper = document.querySelector('[data-cart-items-wrapper]');
let shoppingCart = [];
const cartItemTemplate = document.querySelector('#cart-item-template');
const cartItemContainer = document.querySelector('[data-cart-items]');
const cartQuantity = document.querySelector("[data-cart-quantity]");
const IMAGE_URL = "https://dummyimage.com/210x130";


export function setupShoppingCart(){
    cartButton.addEventListener('click', ()=>{
        cartItemsWrapper.classList.toggle('invisible');
    })
}

export function addToCart(id){
    const existing = shoppingCart.find((e) => e.id === id);
    if(existing){
        existing.quantity++;
    }else{
        shoppingCart.push({id : id, quantity : 1});
    }
    renderCart();
}

function renderCart(){
    cartItemContainer.innerHTML = "";

    cartQuantity.innerText = shoppingCart.length;

    shoppingCart.forEach((entry)=>{
        const item = items.find((i) => i.id === entry.id);
        const cartItem = cartItemTemplate.content.cloneNode(true);

        const container = cartItem.querySelector("[data-item]");
        container.dataset.itemId = item.id;
        
        const name = cartItem.querySelector('[data-name');
        name.innerText = item.name;

        const img = cartItem.querySelector('[data-image]');
        img.src = `${IMAGE_URL}/${item.imageColor}/${item.imageColor}`;

        if(entry.quantity > 1){
            const quantity = cartItem.querySelector('[data-quantity]');
            quantity.innerText = `x${entry.quantity}`
        }
        
        const price = cartItem.querySelector('[data-price]');
        price.innerText = formatCurrency(item.priceCents * entry.quantity);

        cartItemContainer.appendChild(cartItem);
    })
}