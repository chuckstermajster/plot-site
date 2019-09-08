var navbar = document.getElementById("nav");
window.addEventListener("scroll", function() {
  if (this.pageYOffset > 80) {
    navbar.classList.remove("top-8");
    navbar.classList.add("top-0");
  } else {
    navbar.classList.remove("top-0");
    navbar.classList.add("top-8");
  }
});
