const toggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");

toggle.addEventListener("click", () => {
  if (mobileNav.classList.contains("open")) {
    mobileNav.classList.remove("open");
  } else {
    mobileNav.classList.add("open");
  }
});

// Reveal animation
const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Demo form
document.querySelector(".demo-form").addEventListener("submit", e => {
  e.preventDefault();
  alert("Thanks! Our team will contact you shortly.");
  e.target.reset();
});