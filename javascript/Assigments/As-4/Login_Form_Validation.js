// Q7: Login Form Validation using RegExp

// Username: kam se kam 5 characters
function getUsernameErrors(value) {
  const errors = [];
  if (!/^.{5,}$/.test(value)) errors.push("Username kam se kam 5 characters ka hona chahiye");
  return errors;
}

// Password: har rule ka alag check taaki specific error mile
function getPasswordErrors(value) {
  const errors = [];
  if (!/^.{8,}$/.test(value)) errors.push("Password kam se kam 8 characters ka hona chahiye");
  if (!/\d/.test(value)) errors.push("Password mein kam se kam 1 number hona chahiye");
  if (!/[A-Z]/.test(value)) errors.push("Password mein kam se kam 1 uppercase letter hona chahiye");
  if (!/[a-z]/.test(value)) errors.push("Password mein kam se kam 1 lowercase letter hona chahiye");
  if (!/[^A-Za-z0-9]/.test(value)) errors.push("Password mein kam se kam 1 special character hona chahiye");
  return errors;
}

// Errors screen par dikhata hai aur border colour set karta hai
function showErrors(inputId, errorBoxId, errors) {
  const input = document.getElementById(inputId);
  const box = document.getElementById(errorBoxId);
  box.innerHTML = "";
  errors.forEach((msg) => {
    const div = document.createElement("div");
    div.textContent = "• " + msg;
    box.appendChild(div);
  });
  input.classList.toggle("valid", errors.length === 0);
  input.classList.toggle("invalid", errors.length > 0);
}

document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const userErrors = getUsernameErrors(document.getElementById("username").value);
  const passErrors = getPasswordErrors(document.getElementById("password").value);

  showErrors("username", "usernameErrors", userErrors);
  showErrors("password", "passwordErrors", passErrors);

  document.getElementById("success").textContent =
    userErrors.length === 0 && passErrors.length === 0 ? "Login successful ✅" : "";
});