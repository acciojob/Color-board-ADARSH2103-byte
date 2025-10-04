//your JS code here. If required.
const container = document.getElementById("container");
const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];
const squares = 800;

for (let i = 0; i < squares; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseleave", () => removeColor(square));

  container.appendChild(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 10px ${color}, 0 0 40px ${color}`;
}

function removeColor(element) {
  setTimeout(() => {
    element.style.background = "#1d1d1d";
    element.style.boxShadow = "0 0 2px #000";
  }, 1000); // remove color smoothly after 1 second
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}