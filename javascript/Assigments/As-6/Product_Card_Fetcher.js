// Q6: Fake Store API se products fetch karke dikhana

const API_URL = "https://fakestoreapi.com/products";
const productGrid = document.getElementById("productGrid");
const statusMessage = document.getElementById("statusMessage");

// Console mein har product ki details print karta hai
function logProduct(product) {
  console.log(`Product: ${product.title}`);
  console.log(`Price: $${product.price}`);
  console.log(`Image: ${product.image}`);
  console.log(""); // beech mein khaali line
}

// Ek product ka HTML card document.createElement() se banata hai
function createProductCard(product) {
  const card = document.createElement("div");
  card.className = "product-card";

  const image = document.createElement("img");
  image.src = product.image;
  image.alt = product.title;

  const title = document.createElement("h3");
  title.textContent = product.title; // textContent safe hai (HTML injection nahi hoti)

  const price = document.createElement("p");
  price.className = "price";
  price.textContent = `$${product.price}`;

  card.append(image, title, price);
  return card;
}

// Products fetch karne wala async function
async function loadProducts() {
  try {
    const response = await fetch(API_URL);

    // fetch HTTP error (404, 500) par reject nahi karta, isliye khud check karte hain
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const products = await response.json();

    statusMessage.textContent = ""; // loading message hata diya

    products.forEach((product) => {
      logProduct(product); // console output
      productGrid.appendChild(createProductCard(product)); // page par card
    });
  } catch (error) {
    console.error("Error:", error.message);
    statusMessage.textContent = "Failed to load products. Please try again.";
    statusMessage.classList.add("error");
  }
}

loadProducts();