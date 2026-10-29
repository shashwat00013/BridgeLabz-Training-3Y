const dropdown = document.getElementById("dropdown");
const dropdownButton = document.getElementById("dropdownButton");
const dropdownOptions = document.getElementById("dropdownOptions");

function closeDropdown() {
  dropdownOptions.hidden = true;
  dropdownButton.setAttribute("aria-expanded", "false");
}

// Capturing phase: close the dropdown before bubbling handlers run,
// whenever the user clicks outside the dropdown.
document.addEventListener("click", function (event) {
  if (!dropdown.contains(event.target)) closeDropdown();
}, true);

dropdownButton.addEventListener("click", function () {
  const willOpen = dropdownOptions.hidden;
  dropdownOptions.hidden = !willOpen;
  dropdownButton.setAttribute("aria-expanded", String(willOpen));
});

dropdownOptions.addEventListener("click", function (event) {
  const option = event.target.closest("button[data-value]");
  if (!option) return;
  dropdownButton.textContent = option.dataset.value;
  closeDropdown();
});
