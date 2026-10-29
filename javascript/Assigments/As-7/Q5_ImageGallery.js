const gallery = document.getElementById("gallery");
const imageModal = document.getElementById("imageModal");
const modalContent = document.getElementById("modalContent");
const largeImage = document.getElementById("largeImage");
const imageCaption = document.getElementById("imageCaption");

gallery.addEventListener("click", function (event) {
  const clickedImage = event.target.closest("img");
  if (!clickedImage) return;

  largeImage.src = clickedImage.src.replace("/600/400", "/1200/800");
  largeImage.alt = clickedImage.alt;
  imageCaption.textContent = clickedImage.alt;
  imageModal.hidden = false;
});

imageModal.addEventListener("click", function () {
  imageModal.hidden = true;
});

// Prevent clicks inside the modal content from bubbling to the overlay.
modalContent.addEventListener("click", function (event) {
  event.stopPropagation();
});

document.getElementById("closeModal").addEventListener("click", function () {
  imageModal.hidden = true;
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") imageModal.hidden = true;
});
