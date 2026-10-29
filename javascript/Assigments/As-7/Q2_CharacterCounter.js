const message = document.getElementById("message");
const counter = document.getElementById("counter");
const resetButton = document.getElementById("resetButton");
const maximumCharacters = 100;

function updateCounter() {
  const remaining = maximumCharacters - message.value.length;
  counter.textContent = `${remaining} characters remaining`;
  counter.classList.toggle("warning", remaining <= 20 && remaining > 0);
  counter.classList.toggle("limit", remaining === 0);
  if (remaining > 20) counter.style.color = "green";
  else counter.style.color = "";
}

// Keep the input within the limit. beforeinput lets us prevent extra text.
message.addEventListener("beforeinput", function (event) {
  const isInsertion = event.inputType.startsWith("insert");
  const selectedLength = message.selectionEnd - message.selectionStart;
  const projectedLength = message.value.length - selectedLength + (event.data || "").length;
  if (isInsertion && projectedLength > maximumCharacters) {
    event.preventDefault();
  }
});

message.addEventListener("input", updateCounter);
resetButton.addEventListener("click", function () {
  message.value = "";
  updateCounter();
  message.focus();
});
updateCounter();
