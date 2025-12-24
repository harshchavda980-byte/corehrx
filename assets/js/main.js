function toggleMenu(el) {
  const menu = document.getElementById("mobileMenu");
  if (!menu) return;

  menu.classList.toggle("active");
  el.classList.toggle("open");
}

window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (!header) return;

  header.classList.toggle("scrolled", window.scrollY > 40);
});

/* Close mobile menu on click */
document.querySelectorAll(".mobile-menu a, .mobile-menu button").forEach(el => {
  el.addEventListener("click", () => {
    document.getElementById("mobileMenu")?.classList.remove("active");
    document.querySelector(".mobile-toggle")?.classList.remove("open");
  });
});

/* Scroll reveal */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const h = window.innerHeight;
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < h - 120) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
