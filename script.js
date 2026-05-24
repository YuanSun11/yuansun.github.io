const year = document.querySelector("#year");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (year) {
  year.textContent = new Date().getFullYear();
}

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});
