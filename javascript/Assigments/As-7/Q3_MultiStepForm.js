const multiStepForm = document.getElementById("multiStepForm");
const steps = Array.from(document.querySelectorAll(".step"));
const stepLabel = document.getElementById("stepLabel");
const backButton = document.getElementById("backButton");
const nextButton = document.getElementById("nextButton");
const summary = document.getElementById("summary");
let currentStep = 0;

function validateCurrentStep() {
  const input = steps[currentStep].querySelector("input");
  const error = steps[currentStep].querySelector(".error");
  const value = input.value.trim();
  let message = "";

  if (!value) message = "This field is required.";
  else if (input.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) message = "Enter a valid email address.";
  else if (input.type === "password" && value.length < 6) message = "Password must contain at least 6 characters.";

  error.textContent = message;
  input.setAttribute("aria-invalid", String(Boolean(message)));
  return !message;
}

function showStep() {
  steps.forEach((step, index) => {
    step.hidden = index !== currentStep;
    step.classList.toggle("active", index === currentStep);
  });
  stepLabel.textContent = `Step ${currentStep + 1} of 3`;
  backButton.disabled = currentStep === 0;
  nextButton.textContent = currentStep === steps.length - 1 ? "Finish" : "Next";
}

nextButton.addEventListener("click", function () {
  if (!validateCurrentStep()) return;
  if (currentStep < steps.length - 1) {
    currentStep++;
    showStep();
    steps[currentStep].querySelector("input").focus();
  } else {
    multiStepForm.hidden = true;
    stepLabel.hidden = true;
    summary.hidden = false;
    document.getElementById("summaryName").textContent = `Name: ${document.getElementById("fullName").value.trim()}`;
    document.getElementById("summaryEmail").textContent = `Email: ${document.getElementById("email").value.trim()}`;
    // Do not display a real password in a summary in production applications.
    document.getElementById("summaryPassword").textContent = "••••••";
  }
});

backButton.addEventListener("click", function () {
  if (currentStep > 0) {
    currentStep--;
    showStep();
  }
});

steps.forEach(step => {
  const input = step.querySelector("input");
  input.addEventListener("input", function () {
    step.querySelector(".error").textContent = "";
    input.removeAttribute("aria-invalid");
  });
});

document.getElementById("restartButton").addEventListener("click", function () {
  multiStepForm.reset();
  multiStepForm.hidden = false;
  stepLabel.hidden = false;
  summary.hidden = true;
  currentStep = 0;
  steps.forEach(step => step.querySelector(".error").textContent = "");
  showStep();
});
showStep();
