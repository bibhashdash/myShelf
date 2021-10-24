const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".navlinks");

hamburger.addEventListener("click", function() {
    navlinks.classList.toggle("navlinks-open");
    navlinks.style.transition = "all 0.7s";
});