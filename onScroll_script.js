const cards = document.querySelectorAll(".card");
const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            cards.forEach(function(card) {
                card.classList.add("card-animation");
            });
        }
    });
});

observer.observe(document.querySelector(".cards"));