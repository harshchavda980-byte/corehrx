function toggleMenu(el) {
  const menu = document.getElementById("mobileMenu");
  menu.classList.toggle("active");

  el.classList.toggle("open");
}
window.addEventListener("scroll", function () {
  const header = document.getElementById("siteHeader");

  if (window.scrollY > 10) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
/* STICKY HEADER EFFECT */
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (window.scrollY > 40) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
/* SMOOTH SCROLL WITH OFFSET */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const target = document.querySelector(targetId);

    if (!target) return;

    const headerOffset = 80;
    const elementPosition = target.offsetTop;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });

    /* Close mobile menu after click */
    document.getElementById("mobileMenu").classList.remove("active");
  });
});
