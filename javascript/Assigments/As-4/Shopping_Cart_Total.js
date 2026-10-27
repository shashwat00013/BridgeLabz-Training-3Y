// Q9: Shopping Cart Total (Classes + RegExp for Coupon)

class Cart {
  constructor() {
    this.items = [];
    this.discountPercent = 0;
  }

  addItem(name, price, quantity) {
    this.items.push({ name, price, quantity });
  }

  // Bina discount ka total
  getTotal() {
    return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  // Coupon format: SAVE ya DISC + 1-2 digit number (e.g. SAVE20, DISC10)
  applyCoupon(code) {
    const match = /^(SAVE|DISC)(\d{1,2})$/.exec(code.trim().toUpperCase());
    if (!match) {
      this.discountPercent = 0;
      return false; // invalid coupon
    }
    this.discountPercent = Number(match[2]); // number hi discount % hai
    return true;
  }

  getFinalTotal() {
    const total = this.getTotal();
    return total - (total * this.discountPercent) / 100;
  }
}

const cart = new Cart();

// Cart table aur totals refresh karta hai
function render() {
  const body = document.getElementById("cartBody");
  body.innerHTML = "";

  cart.items.forEach((item) => {
    const tr = document.createElement("tr");
    [item.name, item.price, item.quantity, item.price * item.quantity].forEach((val) => {
      const td = document.createElement("td");
      td.textContent = val;
      tr.appendChild(td);
    });
    body.appendChild(tr);
  });

  document.getElementById("total").textContent = cart.getTotal().toFixed(2);
  document.getElementById("discount").textContent = cart.discountPercent;
  document.getElementById("finalTotal").textContent = cart.getFinalTotal().toFixed(2);
}

document.getElementById("itemForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("itemName").value.trim();
  const price = Number(document.getElementById("itemPrice").value);
  const qty = Number(document.getElementById("itemQty").value);

  cart.addItem(name, price, qty);
  e.target.reset();
  render();
});

document.getElementById("applyCoupon").addEventListener("click", () => {
  const msg = document.getElementById("couponMsg");
  const code = document.getElementById("couponInput").value;

  if (cart.applyCoupon(code)) {
    msg.textContent = `Coupon applied: ${cart.discountPercent}% off ✅`;
    msg.className = "ok";
  } else {
    msg.textContent = "Invalid coupon! Format: SAVE20 ya DISC10";
    msg.className = "bad";
  }
  render();
});

render();