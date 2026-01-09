// PAGE LOADER
function showLoader() {
  document.getElementById("pageLoader").style.display = "block";
}

function hideLoader() {
  document.getElementById("pageLoader").style.display = "none";
}

// LOAD PAGE CONTENT
function loadPage(page) {
  showLoader();

  setTimeout(() => {
    const content = document.getElementById("contentArea");

    content.innerHTML = `
      <div class="page-title">
        <h1>${page.replace("-", " ").toUpperCase()}</h1>
        <p>This section will be implemented next.</p>
      </div>
      <div class="panel">
        <p>UI ready for ${page} module.</p>
      </div>
    `;

    document.querySelectorAll(".menu-item").forEach(i => i.classList.remove("active"));
    hideLoader();
  }, 700);
}

// DROPDOWN TOGGLE
document.querySelectorAll(".dropdown-toggle").forEach(toggle => {
  toggle.addEventListener("click", () => {
    const parent = toggle.closest(".has-dropdown");

    document.querySelectorAll(".has-dropdown").forEach(item => {
      if (item !== parent) item.classList.remove("open");
    });

    parent.classList.toggle("open");
  });
});