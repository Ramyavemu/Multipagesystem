document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("dashboardCourses");
  if (!container) return;

  const courses = JSON.parse(localStorage.getItem("enrolledCourses")) || [];

  if (courses.length === 0) {
    container.innerHTML =
      "<p style='padding:40px'>No enrolled courses yet.</p>";
    return;
  }

  courses.forEach(course => {
    container.innerHTML += `
      <div class="course-card">
        <div class="card-body">
          <h3>${course}</h3>
          <p>You are enrolled ✔</p>
        </div>
      </div>
    `;
  });
});
