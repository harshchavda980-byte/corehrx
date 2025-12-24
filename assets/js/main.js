/* ================= MOBILE MENU ================= */
function toggleMenu(el) {
  const menu = document.getElementById("mobileMenu");
  menu.classList.toggle("active");
  el.classList.toggle("open");
}

/* ================= STICKY HEADER ================= */
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (window.scrollY > 20) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

/* ================= REVEAL ON SCROLL ================= */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  reveals.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 120) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
