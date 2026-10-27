// Q2: Student Form Validator (RegExp)

// Har field ka regex aur error message
const rules = {
  name:     { regex: /^[A-Za-z\s]+$/, message: "Name mein sirf alphabets allowed hain" },
  email:    { regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Valid email daalo (example@domain.com)" },
  phone:    { regex: /^\d{10}$/, message: "Phone exactly 10 digits ka hona chahiye" },
  password: { regex: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/, message: "1 uppercase, 1 number aur 1 special character zaroori hai" },
};

// Ek field validate karta hai: red/green border + error message
function validateField(id) {
  const input = document.getElementById(id);
  const errorEl = input.nextElementSibling;
  const isValid = rules[id].regex.test(input.value.trim());

  input.classList.toggle("valid", isValid);
  input.classList.toggle("invalid", !isValid);
  errorEl.textContent = isValid ? "" : rules[id].message;
  return isValid;
}

// Typing ke time live validation
Object.keys(rules).forEach((id) => {
  document.getElementById(id).addEventListener("input", () => validateField(id));
});

document.getElementById("studentForm").addEventListener("submit", (e) => {
  e.preventDefault();
  // map use kiya taaki saare fields ke errors ek saath dikhein
  const results = Object.keys(rules).map(validateField);
  const allValid = results.every(Boolean);
  document.getElementById("result").textContent = allValid ? "Registration successful ✅" : "";
});