const cartButton = document.querySelector('[data-cart-button]');
const cartItemsWrapper = document.querySelector('[data-cart-items-wrapper]');

export function setupShoppingCart(){
    cartButton.addEventListener('click', ()=>{
        cartItemsWrapper.classList.toggle('invisible');
    })
}
