const categories = document.querySelectorAll(".cate a");

categories.forEach(category => {
  category.addEventListener("click", (e) => {
    e.preventDefault();
    alert(`You clicked category: ${category.innerText}`);
  });
});
