
function getCart() {
  return JSON.parse(localStorage.getItem('generousCart')) || [];
}

function saveCart(cart) {
  localStorage.setItem('generousCart', JSON.stringify(cart));
}

function addToCart(product) {
  let cart = getCart();
  const existing = cart.find(item => item.id === product.id);
  
  if (existing) {
    existing.quantity = (existing.quantity || 1) + 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  
  saveCart(cart);
  updateCartCount();
  showToast(`${product.name} added to cart!`);
}

function removeFromCart(id) {
  let cart = getCart().filter(item => item.id !== id);
  saveCart(cart);
  updateCartCount();
}

function updateQuantity(id, quantity) {
  let cart = getCart();
  const item = cart.find(i => i.id === id);
  if (item) {
    item.quantity = parseInt(quantity);
    if (item.quantity < 1) removeFromCart(id);
    else saveCart(cart);
  }
  updateCartCount();
}

function clearCart() {
  localStorage.removeItem('generousCart');
  updateCartCount();
}

function getCartTotal() {
  return getCart().reduce((total, item) => {
    return total + (item.price * (item.quantity || 1));
  }, 0);
}

function updateCartCount() {
  const countEl = document.getElementById('cart-count');
  if (countEl) {
    const totalItems = getCart().reduce((sum, item) => sum + (item.quantity || 1), 0);
    countEl.textContent = totalItems;
  }
}

// Simple toast notification
function showToast(message) {
  const toast = document.createElement('div');
  toast.style.cssText = `
    position:fixed; bottom:20px; right:20px; background:#C5A059; 
    color:white; padding:14px 24px; border-radius:9999px; 
    box-shadow:0 10px 15px -3px rgb(0 0 0 / 0.2); z-index:9999;
    font-weight:500; display:flex; align-items:center; gap:8px;
  `;
  toast.innerHTML = `<i class="fa-solid fa-check" style="opacity:.95"></i><span>${message}</span>`;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2800);
}