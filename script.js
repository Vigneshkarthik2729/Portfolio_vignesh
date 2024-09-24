// Toggle responsive menu
function myFunction() {
  var x = document.getElementById("myTopnav");
  x.classList.toggle("responsive");
}

// Scroll to top function
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Show/hide scroll to top button based on scroll position
window.addEventListener("scroll", function () {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  scrollToTopBtn.style.display = window.scrollY > 20 ? "block" : "none";
});
