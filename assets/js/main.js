const toggle = document.getElementById("menuToggle");
const menu = document.getElementById("navMenu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("show");
});

document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !toggle.contains(e.target)) {
    menu.classList.remove("show");
  }
});
