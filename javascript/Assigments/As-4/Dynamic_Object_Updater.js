// Q8: Dynamic Object Updater

const user = { name: "John", email: "john@mail.com", age: 21 };

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const ageInput = document.getElementById("age");

// Object ki current values screen par dikhata hai
function display() {
  const box = document.getElementById("display");
  box.innerHTML = "";
  Object.entries(user).forEach(([key, value]) => {
    const p = document.createElement("p");
    p.textContent = `${key}: ${value}`;
    box.appendChild(p);
  });
  document.getElementById("json").textContent = JSON.stringify(user, null, 2);
}

// Form ko object ki values se bharta hai
function fillForm() {
  nameInput.value = user.name;
  emailInput.value = user.email;
  ageInput.value = user.age;
}

// Object ko form ki values se update karta hai
function updateUser() {
  user.name = nameInput.value;
  user.email = emailInput.value;
  user.age = Number(ageInput.value);
  display();
}

// Real time update: type karte hi object update hota hai
[nameInput, emailInput, ageInput].forEach((input) => input.addEventListener("input", updateUser));

// Submit par bhi update (page reload roka)
document.getElementById("userForm").addEventListener("submit", (e) => {
  e.preventDefault();
  updateUser();
});

fillForm();
display();