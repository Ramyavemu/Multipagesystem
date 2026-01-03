/* ================= CART ================= */
window.cart = JSON.parse(localStorage.getItem("cart")) || [];

window.addToCart = function (title, price) {
  window.cart.push({ title, price });
  localStorage.setItem("cart", JSON.stringify(window.cart));
  alert(`${title} added to cart 🛒`);
};

/* ================= ENROLL HELPERS ================= */
function getEnrolledCourses() {
  return JSON.parse(localStorage.getItem("enrolledCourses")) || [];
}

function saveEnrolledCourses(courses) {
  localStorage.setItem("enrolledCourses", JSON.stringify(courses));
}

/* ================= BUY NOW ================= */
window.buyNow = function (courseName) {
  const courses = getEnrolledCourses();
  courses.push(courseName); // ✅ allow re-enroll
  saveEnrolledCourses(courses);

  alert(courseName + " enrolled successfully!");
  window.location.href = "dashboard.html";
};

/* ================= ENROLL BUTTON ================= */
document.addEventListener("DOMContentLoaded", () => {
  const enrollBtn = document.querySelector(".enrollBtn");
  if (!enrollBtn) return;

  const courseName = enrollBtn.dataset.course;

  // Optional UI text change if already enrolled
  const courses = getEnrolledCourses();
  if (courses.includes(courseName)) {
    enrollBtn.textContent = "Re-Enroll";
    enrollBtn.style.background = "#ffc107";
  }

  enrollBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const updatedCourses = getEnrolledCourses();
    updatedCourses.push(courseName); // ✅ re-enroll allowed
    saveEnrolledCourses(updatedCourses);

    alert(courseName + " enrolled successfully!");
    window.location.href = "dashboard.html";
  });
});
