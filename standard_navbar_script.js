const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".navlinks");
const closebtn = document.querySelector(".closebtn");

hamburger.addEventListener("click", function() {
    navlinks.classList.add("navlinks-open");
    navlinks.style.transition = "ease-in-out 0.4s";
    hamburger.style.opacity = "0";
    closebtn.classList.remove("hidden");
});

closebtn.addEventListener("click", function() {
    navlinks.classList.remove("navlinks-open");
    navlinks.style.transition = "ease-in-out 0.7s";
    hamburger.style.opacity = "1";
    closebtn.classList.add("hidden");
});