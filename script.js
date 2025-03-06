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

let different = ["Business", "Karobar"];

let index = 0; 
let heroTextElement = document.getElementById("heroText");

function typeText(text, callback) {
    let currentIndex = 0;
    heroTextElement.innerHTML = ""; 
    let typingInterval = setInterval(function() {
        heroTextElement.innerHTML += text[currentIndex];
        currentIndex++;
        if (currentIndex === text.length) {
            clearInterval(typingInterval);
            setTimeout(callback, 2000); 
        }
    }, 100); 
}

function changeText() {
    typeText(different[index], function() {
        index = (index + 1) % different.length; 
        changeText(); 
    });
}

changeText();


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
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".youtube-container").forEach(function (el) {
        el.addEventListener("click", function () {
            let videoId = this.getAttribute("data-video-id");
            let iframe = document.createElement("iframe");
            iframe.setAttribute("src", "https://www.youtube.com/embed/" + videoId + "?autoplay=1&rel=0");
            iframe.setAttribute("frameborder", "0");
            iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
            iframe.setAttribute("allowfullscreen", "true");
            iframe.setAttribute("width", "100%");
            iframe.setAttribute("height", "200");
            this.innerHTML = "";
            this.appendChild(iframe);
        });
    });
});