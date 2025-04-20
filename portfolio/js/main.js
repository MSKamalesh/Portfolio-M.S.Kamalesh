// Sticky Navbar
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (header) {
    header.classList.toggle("sticky", window.scrollY > 0);
  }
});

// Toggle Navigation Menu
function toggleMenu() {
  const menu = document.querySelector(".menu");
  const toggle = document.querySelector(".toggle");

  if (menu && toggle) {
    menu.classList.toggle("active");
    toggle.classList.toggle("active");
  }
}

// Close menu when a link is clicked (for better UX on mobile)
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".menu a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 800) {
        toggleMenu();
      }
    });
  });
});

// Update Current Year in Footer
document.addEventListener("DOMContentLoaded", () => {
  const currentYearEl = document.querySelector("#currentYear");
  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
  }
});
