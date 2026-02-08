// Placeholder animation - adds typing effect to placeholder
const input = document.querySelector("main input");
const placeholderText = "search for restaurant, cuisine or a dish";
let i = 0;

function typePlaceholder() {
  if (i < placeholderText.length) {
    input.setAttribute("placeholder", placeholderText.substring(0, i + 1));
    i++;
    setTimeout(typePlaceholder, 60);
  }
}
typePlaceholder();

// Add focus glow animation
input.addEventListener("focus", () => {
  input.style.boxShadow = "0 0 8px rgba(226, 55, 68, 0.6)";
});

input.addEventListener("blur", () => {
  input.style.boxShadow = "none";
});
