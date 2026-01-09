/* ================= DOM READY ================= */
document.addEventListener("DOMContentLoaded", () => {

  /* ================= ACTIVE MENU ================= */
  document.querySelectorAll(".sidebar nav a").forEach(link => {
    link.addEventListener("click", () => {
      document
        .querySelectorAll(".sidebar nav a")
        .forEach(i => i.classList.remove("active"));

      link.classList.add("active");
    });
  });

  /* ================= DROPDOWN MENU ================= */
  const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

  dropdownToggles.forEach(toggle => {
    toggle.addEventListener("click", () => {
      const parent = toggle.closest(".has-dropdown");

      // Close other dropdowns
      document.querySelectorAll(".has-dropdown").forEach(item => {
        if (item !== parent) {
          item.classList.remove("open");
        }
      });

      // Toggle current dropdown
      parent.classList.toggle("open");
    });
  });

  /* ================= PAGE LOADER ================= */
  window.loadPage = function (pageName) {
    const loader = document.getElementById("pageLoader");
    const content = document.querySelector(".content");

    if (!loader || !content) return;

    loader.style.display = "flex";

    setTimeout(() => {
      loader.style.display = "none";

      content.innerHTML = `
        <div class="panel animate-fade">
          <h2>${pageName.replace("-", " ").toUpperCase()}</h2>
          <p>This section UI will be implemented next.</p>
        </div>
      `;
    }, 700);
  };

  /* ================= MODAL ================= */
  window.openModal = function () {
    const modal = document.getElementById("companyModal");
    if (modal) modal.style.display = "flex";
  };

  window.closeModal = function () {
    const modal = document.getElementById("companyModal");
    if (modal) modal.style.display = "none";
  };

});