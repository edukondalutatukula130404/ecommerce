let cart = [];
let total = 0;

// Add product to cart
function addToCart(product, price) {
  cart.push({ name: product, price: price });
  total += price;
  displayCart();
}

// Display cart items and total
function displayCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    cartItems.appendChild(li);
  });

  document.getElementById("cart-total").textContent = total;
}

// Search 
function searchProduct() {
  const query = document.getElementById("search").value.toLowerCase();
  const products = document.querySelectorAll(".product");

  products.forEach(product => {
    const name = product.querySelector("h3").textContent.toLowerCase();
    product.style.display = name.includes(query) ? "block" : "none";
  });
}

// Show products by category
function showCategory(category) {
  const products = document.querySelectorAll(".product");

  products.forEach(product => {
    if (category === "all" || product.dataset.category === category) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if(user === "balaji" && pass === "1234") {
      window.location.href = "ecommerceHTML.html";
    } else {
      alert("Invalid login!");
    }
  });

