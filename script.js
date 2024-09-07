// Dropdown menu
const dropdown = document.querySelector(".dropdown");
const dropdownContent = document.querySelector(".dropdown-content");

dropdown.addEventListener("click", function() {
  //event.preventDefault();
  dropdownContent.classList.toggle("show");
});