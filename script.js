document.getElementById("year").textContent = new Date().getFullYear();

const filters = document.querySelectorAll(".filter");
const projects = document.querySelectorAll(".project");

filters.forEach((button) => {
  button.addEventListener("click", () => {
    filters.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;

    projects.forEach((project) => {
      const categories = project.dataset.category.split(" ");
      const shouldShow = filter === "all" || categories.includes(filter);
      project.classList.toggle("hidden-project", !shouldShow);
    });
  });
});
