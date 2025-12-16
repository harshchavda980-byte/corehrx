// Header shadow
window.addEventListener("scroll", () => {
  document.querySelector(".header")
    .classList.toggle("scrolled", window.scrollY > 10);

  document.querySelector(".whatsapp-btn").style.display =
    window.scrollY > 300 ? "block" : "none";
});

// Mobile menu
document.querySelector(".menu-toggle")
  .addEventListener("click", () => {
    document.querySelector(".mobile-nav")
      .classList.toggle("open");
  });

// Reveal animation
const reveals = document.querySelectorAll(".reveal");
const revealOnScroll = () => {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
};
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();