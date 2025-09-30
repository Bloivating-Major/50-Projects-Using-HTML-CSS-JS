import items from "./items.json";
import { addGlobalEventListener } from "./utils/addGlobalEventListener";
import formatCurrency from "./utils/formatCurrency";

let shoppingCart = [];
const IMAGE_URL = "https://dummyimage.com/210x130";
const SESSION_STORAGE_KEY = "SHOPPING_CART-cart";

export function setupShoppingCart() {
  initializeCart();
}

function initializeCart() {
  // Add event listeners for add to cart
  addGlobalEventListener("click", "[data-add-to-cart-button]", (e) => {
    const storeItem = e.target.closest("[data-store-item]");
    if (!storeItem) return;
    const id = parseInt(storeItem.dataset.itemId);
    addToCart(id);
  });

  // Add event listeners for remove from cart
  addGlobalEventListener("click", "[data-remove-from-cart-button]", (e) => {
    const cartItem = e.target.closest("[data-item]");
    if (!cartItem) return;
    const id = parseInt(cartItem.dataset.itemId);
    removeItems(id);
  });

  // Add cart button toggle - ONLY responds to user clicks
  const cartButton = document.querySelector("[data-cart-button]");
  if (cartButton) {
    cartButton.addEventListener("click", (e) => {
      e.stopPropagation();
      const cartItemsWrapper = document.querySelector("[data-cart-items-wrapper]");
      if (cartItemsWrapper) {
        cartItemsWrapper.classList.toggle("invisible");
      }
    });
  }

  // Load existing cart and render (but don't show cart automatically)
  shoppingCart = loadCart();
  renderCart();
}

function saveCart() {
  sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(shoppingCart));
}

function loadCart() {
  const cart = sessionStorage.getItem(SESSION_STORAGE_KEY);
  return JSON.parse(cart) || [];
}

export function addToCart(id) {
  const existing = shoppingCart.find((e) => e.id === id);
  if (existing) {
    existing.quantity++;
  } else {
    shoppingCart.push({ id: id, quantity: 1 });
  }
  renderCart();
  saveCart();
}

function removeItems(id) {
  const existing = shoppingCart.find((e) => e.id === id);
  if (existing == null) return;
  shoppingCart = shoppingCart.filter((entry) => entry.id !== id);
  renderCart();
  saveCart();
}

function renderCart() {
  const cartQuantity = document.querySelector("[data-cart-quantity]");
  const cartTotal = document.querySelector("[data-cart-total]");
  const cartItemContainer = document.querySelector("[data-cart-items]");
  
  // Update quantity if element exists
  if (cartQuantity) {
    cartQuantity.innerText = shoppingCart.length;
  }
  
  // Update total if element exists
  if (cartTotal) {
    const total = shoppingCart.reduce((sum, entry) => {
      const item = items.find((i) => entry.id === i.id);
      return sum + (item ? item.priceCents * entry.quantity : 0);
    }, 0);
    cartTotal.innerHTML = formatCurrency(total);
  }
  
  // Only render cart items, don't auto-show/hide cart
  if (cartItemContainer) {
    renderCartItems();
  }
}

function renderCartItems() {
  const cartItemContainer = document.querySelector("[data-cart-items]");
  const cartItemTemplate = document.querySelector("#cart-item-template");
  
  if (!cartItemContainer || !cartItemTemplate) return;

  cartItemContainer.innerHTML = "";

  shoppingCart.forEach((entry) => {
    const item = items.find((i) => i.id === entry.id);
    if (!item) return;

    const cartItem = cartItemTemplate.content.cloneNode(true);

    const container = cartItem.querySelector("[data-item]");
    if (container) container.dataset.itemId = item.id;

    const name = cartItem.querySelector("[data-name]");
    if (name) name.innerText = item.name;

    const img = cartItem.querySelector("[data-image]");
    if (img) img.src = `${IMAGE_URL}/${item.imageColor}/${item.imageColor}`;

    if (entry.quantity > 1) {
      const quantity = cartItem.querySelector("[data-quantity]");
      if (quantity) quantity.innerText = `x${entry.quantity}`;
    }

    const price = cartItem.querySelector("[data-price]");
    if (price) price.innerText = formatCurrency(item.priceCents * entry.quantity);

    cartItemContainer.appendChild(cartItem);
  });
}
