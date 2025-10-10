// Toggle mobile navigation menu
document.querySelector(".menu-toggle").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("show");
});

// Cart logic
let cartCount = 0;
document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    cartCount++;
    document.querySelector("#cart-count").textContent = cartCount;
    alert(`Item added! Cart count: ${cartCount}`);
  });
});
