const productForm = document.getElementById("productForm");
const productInput = document.getElementById("productInput");
const productList = document.getElementById("productList");
let editingItem = null;

// Add a product to the list.
productForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const productName = productInput.value.trim();
  if (!productName) return;

  const listItem = document.createElement("li");
  const nameSpan = document.createElement("span");
  nameSpan.className = "product-name";
  nameSpan.textContent = productName;

  const editButton = document.createElement("button");
  editButton.type = "button";
  editButton.className = "edit-button";
  editButton.dataset.action = "edit";
  editButton.textContent = "Edit";

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.className = "delete-button";
  deleteButton.dataset.action = "delete";
  deleteButton.textContent = "Delete";

  listItem.append(nameSpan, editButton, deleteButton);
  productList.appendChild(listItem);
  productInput.value = "";
  productInput.focus();
});

// Event delegation: one listener handles Edit and Delete buttons.
productList.addEventListener("click", function (event) {
  const button = event.target.closest("button[data-action]");
  if (!button) return;

  const listItem = button.closest("li");
  if (button.dataset.action === "delete") {
    if (editingItem === listItem) editingItem = null;
    listItem.remove();
  } else if (button.dataset.action === "edit") {
    startEditing(listItem);
  }
});

function startEditing(listItem) {
  if (editingItem && editingItem !== listItem) saveEditing(editingItem);
  if (editingItem === listItem) return;

  const nameSpan = listItem.querySelector(".product-name");
  const oldName = nameSpan.textContent;
  const editInput = document.createElement("input");
  editInput.type = "text";
  editInput.value = oldName;
  editInput.className = "inline-edit";
  editInput.setAttribute("aria-label", "Edit product name");

  nameSpan.replaceWith(editInput);
  listItem.dataset.originalName = oldName;
  editingItem = listItem;
  editInput.focus();
  editInput.select();

  editInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") saveEditing(listItem);
    if (event.key === "Escape") {
      editInput.value = listItem.dataset.originalName;
      saveEditing(listItem);
    }
  });

  editInput.addEventListener("blur", function () {
    saveEditing(listItem);
  });
}

function saveEditing(listItem) {
  if (!listItem || !listItem.isConnected) return;
  const editInput = listItem.querySelector(".inline-edit");
  if (!editInput) return;

  const nameSpan = document.createElement("span");
  nameSpan.className = "product-name";
  nameSpan.textContent = editInput.value.trim() || listItem.dataset.originalName;
  editInput.replaceWith(nameSpan);
  delete listItem.dataset.originalName;
  if (editingItem === listItem) editingItem = null;
}

// Clicking anywhere outside the edited list item saves the edit.
document.addEventListener("click", function (event) {
  if (editingItem && !editingItem.contains(event.target)) {
    saveEditing(editingItem);
  }
});
