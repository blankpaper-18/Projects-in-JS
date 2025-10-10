// Sample product data (usually fetched from server)
const products = [
  { id: 1, name: "Product A", price: 349, image: "productA.jpg" },
  { id: 2, name: "Product B", price: 549, image: "productB.jpg" },
];

// Cart Data Structure
let cart = [];

// Render Cart Items
function renderCart() {
  const cartTable = document.getElementById("cartTableBody");
  cartTable.innerHTML = "";
  cart.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.name}</td>
      <td class="text-right">₹${item.price}</td>
      <td class="text-right">
        <input type="number" min="1" value="${item.quantity}" 
          onchange="updateQuantity(${item.id}, this.value)">
      </td>
      <td class="text-right">₹${item.price * item.quantity}</td>
      <td><button onclick="removeFromCart(${item.id})">Remove</button></td>
    `;
    cartTable.appendChild(row);
  });
  updateTotal();
}

// Add Product to Cart
function addToCart(id) {
  const existing = cart.find((item) => item.id === id);
  if (existing) {
    existing.quantity += 1;
  } else {
    const product = products.find((p) => p.id === id);
    cart.push({ ...product, quantity: 1 });
  }
  renderCart();
}

// Remove from Cart
function removeFromCart(id) {
  cart = cart.filter((item) => item.id !== id);
  renderCart();
}

// Update Quantity
function updateQuantity(id, qty) {
  const item = cart.find((i) => i.id === id);
  if (item) {
    item.quantity = Number(qty);
  }
  renderCart();
}

// Update Total Amount
function updateTotal() {
  let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  document.getElementById("totalAmount").innerText = "₹" + total;
  document.getElementById("itemCount").innerText = cart.length;
}

// Example: To add a product (simulate button click)
addToCart(1);
addToCart(2);
// Call renderCart on page load
window.onload = renderCart;
