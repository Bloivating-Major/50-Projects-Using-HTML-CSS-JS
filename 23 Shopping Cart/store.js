import items from './items.json';
import { addGlobalEventListener } from './utils/addGlobalEventListener';
import formatCurrency from './utils/formatCurrency';

const IMAGE_URL = "https://dummyimage.com/420x260";

export function setupStore() {
    const storeItemTemplate = document.querySelector('#store-item-template');
    const storeItemContainer = document.querySelector('[data-store-container]');
    
    if (!storeItemContainer || !storeItemTemplate) {
        console.error("Store container or template not found");
        return;
    }

    // REMOVE THE EVENT LISTENER FROM HERE - it's handled in shoppingCart.js
    // Don't add the click listener here since shoppingCart.js handles it
    
    items.forEach(item => renderStore(item, storeItemTemplate, storeItemContainer));
}

function renderStore(item, storeItemTemplate, storeItemContainer) {
    const storeItem = storeItemTemplate.content.cloneNode(true);
    const container = storeItem.querySelector("[data-store-item]");
    container.dataset.itemId = item.id;

    const name = storeItem.querySelector("[data-name]");
    name.innerText = item.name;

    const category = storeItem.querySelector("[data-category]");
    category.innerText = item.category;

    const price = storeItem.querySelector("[data-price]");
    price.innerText = formatCurrency(item.priceCents);

    const img = storeItem.querySelector("[data-image]");
    img.src = `${IMAGE_URL}/${item.imageColor}/${item.imageColor}`;

    storeItemContainer.appendChild(storeItem);
}
