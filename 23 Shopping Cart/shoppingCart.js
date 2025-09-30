import items from "./items.json";
import { addGlobalEventListener } from "./utils/addGlobalEventListener";
import formatCurrency from "./utils/formatCurrency";

const cartButton = document.querySelector("[data-cart-button]");
const cartItemsWrapper = document.querySelector("[data-cart-items-wrapper]");
let shoppingCart = [];
const cartItemTemplate = document.querySelector("#cart-item-template");
const cartItemContainer = document.querySelector("[data-cart-items]");
const cartQuantity = document.querySelector("[data-cart-quantity]");
const cartTotal = document.querySelector("[data-cart-total]");
const cart = document.querySelector("[data-cart]");
const IMAGE_URL = "https://dummyimage.com/210x130";
const SESSION_STORAGE_KEY = "SHOPPING_CART-cart";

export function setupShoppingCart() {
  addGlobalEventListener("click", "[data-remove-from-cart-button]", (e) => {
    const id = e.target.closest("[data-item]").dataset.itemId;
    removeItems(parseInt(id));
  });

  shoppingCart = loadCart();
  renderCart();

  cartButton.addEventListener("click", () => {
    cartItemsWrapper.classList.toggle("invisible");
  });
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
  if (shoppingCart.length === 0) {
    hideCart();
  } else {
    showCart();
    renderCartItems();
  }
}

function hideCart() {
  cart.classList.add("invisible");
  cartItemsWrapper.classList.add("invisible");
}

function showCart() {
  cart.classList.remove("invisible");
}

function renderCartItems() {
  cartQuantity.innerText = shoppingCart.length;

  const total = shoppingCart.reduce((sum, entry) => {
    const item = items.find((i) => entry.id === i.id);
    return sum + item.priceCents * entry.quantity;
  }, 0);

  cartTotal.innerHTML = formatCurrency(total);

  cartItemContainer.innerHTML = "";
  shoppingCart.forEach((entry) => {
    const item = items.find((i) => i.id === entry.id);
    const cartItem = cartItemTemplate.content.cloneNode(true);

    const container = cartItem.querySelector("[data-item]");
    container.dataset.itemId = item.id;

    const name = cartItem.querySelector("[data-name");
    name.innerText = item.name;

    const img = cartItem.querySelector("[data-image]");
    img.src = `${IMAGE_URL}/${item.imageColor}/${item.imageColor}`;

    if (entry.quantity > 1) {
      const quantity = cartItem.querySelector("[data-quantity]");
      quantity.innerText = `x${entry.quantity}`;
    }

    const price = cartItem.querySelector("[data-price]");
    price.innerText = formatCurrency(item.priceCents * entry.quantity);

    cartItemContainer.appendChild(cartItem);
  });
}
