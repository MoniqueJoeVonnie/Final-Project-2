const range = document.getElementById("priceRange");
const value = document.getElementById("priceValue");

range.addEventListener("input", () => {
  value.textContent = range.value;
});