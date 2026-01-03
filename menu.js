document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const navLinks = document.querySelector(".nav-links");

  if (!menuBtn || !navLinks) return;

  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});
