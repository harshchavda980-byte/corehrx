/* ===== LOAD HEADER & FOOTER ===== */
fetch("partials/header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;
  });

fetch("partials/footer.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  });

/* ===== MOBILE MENU ===== */
function toggleMenu(toggle) {
  const menu = document.getElementById("mobileMenu");
  if (!menu) return;
  menu.classList.toggle("open");
  toggle.classList.toggle("open");
}


/* ===== REVEAL ON SCROLL ===== */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < windowHeight - 80) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ===== INTRO SPLASH HIDE =====
window.addEventListener("load", () => {
  const splash = document.getElementById("intro-splash");
  if (splash) {
    setTimeout(() => {
      splash.classList.add("hide");
    }, 800); // delay for animation
  }
});

/* ===== ACTIVE NAV LINK ===== */
function setActiveNav() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  // Desktop links
  document.querySelectorAll(".desktop-nav a").forEach(link => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });

  // Mobile links
  document.querySelectorAll(".mobile-menu a").forEach(link => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });
}

/* Call AFTER header loads */
setTimeout(setActiveNav, 100);