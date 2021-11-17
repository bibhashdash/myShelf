const sliderNavPrevious = document.querySelector(".slider-nav-previous");

const sliderNavNext = document.querySelector(".slider-nav-next");

const slidesArray = document.querySelectorAll(".slide");

sliderNavNext.addEventListener("click", function() {
    const activeSlide = document.querySelector(".active");

    if (!activeSlide.nextElementSibling) {
        slidesArray[0].classList.add("active");
        activeSlide.classList.remove("active");
        slidesArray[0].classList.remove("inactive");
        activeSlide.classList.add("inactive");
    } else {
        activeSlide.classList.remove("active");
        activeSlide.classList.add("inactive");
        activeSlide.nextElementSibling.classList.remove("inactive");
        activeSlide.nextElementSibling.classList.add("active");
    }
});

sliderNavPrevious.addEventListener("click", function() {
    const activeSlide = document.querySelector(".active");
    if (!activeSlide.previousElementSibling) {
        slidesArray[slidesArray.length - 1].classList.add("active");
        activeSlide.classList.remove("active");
        slidesArray[slidesArray.length - 1].classList.remove("inactive");
        activeSlide.classList.add("inactive");
    } else {
        activeSlide.classList.remove("active");
        activeSlide.classList.add("inactive");
        activeSlide.previousElementSibling.classList.remove("inactive");
        activeSlide.previousElementSibling.classList.add("active");
    }
});