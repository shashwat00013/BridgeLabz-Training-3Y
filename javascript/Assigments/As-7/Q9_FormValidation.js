const registrationForm = document.getElementById("registrationForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const successMessage = document.getElementById("successMessage");

const fields = [
  { input: nameInput, error: document.getElementById("nameError") },
  { input: emailInput, error: document.getElementById("emailError") },
  { input: passwordInput, error: document.getElementById("passwordError") }
];

function validateField(input, errorElement) {
  const value = input.value.trim();
  let errorMessage = "";

  if (input === nameInput && !value) {
    errorMessage = "Name is required.";
  } else if (input === emailInput && !value) {
    errorMessage = "Email is required.";
  } else if (input === emailInput && !value.includes("@")) {
    errorMessage = "Email must contain @.";
  } else if (input === passwordInput && value.length < 6) {
    errorMessage = "Password must be at least 6 characters.";
  }

  errorElement.textContent = errorMessage;
  input.setAttribute("aria-invalid", String(Boolean(errorMessage)));
  return errorMessage === "";
}

// Prevent normal submission and show inline validation errors.
registrationForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const isValid = fields
    .map(field => validateField(field.input, field.error))
    .every(Boolean);

  if (isValid) {
    successMessage.hidden = false;
    registrationForm.reset();
    fields.forEach(field => {
      field.input.removeAttribute("aria-invalid");
      field.error.textContent = "";
    });
  } else {
    successMessage.hidden = true;
  }
});

// Revalidate each field as the user corrects it.
fields.forEach(field => {
  field.input.addEventListener("input", function () {
    validateField(field.input, field.error);
    successMessage.hidden = true;
  });
});
