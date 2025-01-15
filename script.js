window.onload = ()=>{
    setTimeout(()=>{
        document.querySelector(".spinnerContainer").style.display = "none";
        document.querySelector(".container").style.display = "block";
    },1000) //3 sec normal decrrease for developmenr
}

const burgerBtn = document.getElementById("burgerBtn");
const mobileNav = document.getElementById("mobileNav");

burgerBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("open");
});

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll('.mission, .vision');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, {
        threshold: 0.2, // Trigger when 20% of the element is visible
    });

    elements.forEach(element => observer.observe(element));
});

