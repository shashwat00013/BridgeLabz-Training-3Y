const themeButtons = document.querySelectorAll("[data-theme-choice]");
const currentTheme = document.getElementById("currentTheme");

function applyTheme(themeName) {
  // setAttribute is used to store the theme on the body element.
  document.body.setAttribute("data-theme", themeName);
  currentTheme.textContent = themeName;
  try {
    localStorage.setItem("selectedTheme", themeName);
  } catch (error) {
    // The theme still works if storage is unavailable.
  }
}

themeButtons.forEach(button => {
  button.addEventListener("click", function () {
    applyTheme(button.getAttribute("data-theme-choice"));
  });
});

let savedTheme = "light";
try {
  savedTheme = localStorage.getItem("selectedTheme") || "light";
} catch (error) {}
if (!["light", "dark", "blue"].includes(savedTheme)) savedTheme = "light";
applyTheme(savedTheme);
