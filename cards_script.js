const titleCard = document.querySelector(".title-card");
const titlecardHeading = document.querySelector(".title-card-heading");
const microbuttonArrow = document.querySelector(".microbutton-arrow");
const microbuttonClose = document.querySelector(".microbutton-close");
const modalLayer = document.querySelector(".modal-layer");
const textCard = document.querySelector(".text-card");

titleCard.addEventListener("click", function() {
    // titleCard.style.transform = "translateX(700px)";
    titleCard.style.width = "0px";
    titlecardHeading.style.transform = "translateX(700px)";
    microbuttonArrow.style.transform = "translateX(700px)";
    titleCard.style.transition = "all 1.4s";

    titlecardHeading.style.transition = "all 0.3s";
    microbuttonArrow.style.transition = "all 0.3s";

    modalLayer.style.transform = "translateX(1px)";
    modalLayer.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    modalLayer.style.transition = "all 1.4s";
});

microbuttonClose.addEventListener("click", function() {
    modalLayer.style.transform = "translateX(-900px)";
    modalLayer.style.backgroundColor = "white";
    modalLayer.style.transition = "all 1.5s";
    titleCard.style.width = "60%";
    titlecardHeading.style.transform = "translateX(-1px)";
    microbuttonArrow.style.transform = "translateX(-1px)";
    titleCard.style.transition = "all 0.8s";

    titlecardHeading.style.transition = "all 2.5s";
    microbuttonArrow.style.transition = "all 2.5s";
});