const trackingBox = document.getElementById("trackingBox");
const coordinates = document.getElementById("coordinates");

trackingBox.addEventListener("mousemove", function (event) {
  coordinates.textContent = `clientX: ${event.clientX}, clientY: ${event.clientY}`;
});

trackingBox.addEventListener("mouseleave", function () {
  coordinates.textContent = "clientX: —, clientY: —";
});

trackingBox.addEventListener("dblclick", function (event) {
  const boxBounds = trackingBox.getBoundingClientRect();
  const dot = document.createElement("span");
  dot.className = "dot";
  // Convert viewport coordinates to positions within the box.
  dot.style.left = `${event.clientX - boxBounds.left}px`;
  dot.style.top = `${event.clientY - boxBounds.top}px`;
  trackingBox.appendChild(dot);
});
