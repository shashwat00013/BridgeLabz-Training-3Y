// Q5: Movie Ticket Booking (Objects + RegExp)

const rules = {
  name:  { regex: /^[A-Za-z\s]+$/, message: "Name mein sirf alphabets allowed hain" },
  email: { regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Valid email daalo (example@domain.com)" },
  seats: { regex: /^(10|[1-9])$/, message: "Seats 1 se 10 ke beech honi chahiye" }, // 1-9 ya 10
};

function validateField(id) {
  const input = document.getElementById(id);
  const isValid = rules[id].regex.test(input.value.trim());
  input.classList.toggle("valid", isValid);
  input.classList.toggle("invalid", !isValid);
  input.nextElementSibling.textContent = isValid ? "" : rules[id].message;
  return isValid;
}

Object.keys(rules).forEach((id) => {
  document.getElementById(id).addEventListener("input", () => validateField(id));
});

document.getElementById("bookingForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const allValid = Object.keys(rules).map(validateField).every(Boolean);
  if (!allValid) return;

  // Booking info object mein store
  const booking = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    seats: Number(document.getElementById("seats").value),
  };

  // Ticket dikhana (textContent use kiya taaki HTML injection na ho)
  const ticketDiv = document.getElementById("ticket");
  ticketDiv.innerHTML = `<div class="card"><h3>🎟️ Ticket Confirmed</h3>
    <p><b>Name:</b> <span id="tName"></span></p>
    <p><b>Email:</b> <span id="tEmail"></span></p>
    <p><b>Seats:</b> <span id="tSeats"></span></p></div>`;
  document.getElementById("tName").textContent = booking.name;
  document.getElementById("tEmail").textContent = booking.email;
  document.getElementById("tSeats").textContent = booking.seats;

  console.log("Booking:", booking);
});