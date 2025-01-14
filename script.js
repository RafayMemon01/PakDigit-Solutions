window.onload = ()=>{
    setTimeout(()=>{
        document.querySelector(".spinnerContainer").style.display = "none";
        document.querySelector(".container").style.display = "block";
    },3000)
}

const burgerBtn = document.getElementById("burgerBtn");
const mobileNav = document.getElementById("mobileNav");

burgerBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("open");
});


let different = ["Business","Karobar"]

for(let i = 0; i<different.length;i++){
    setTimeout(()=>{
        let text = document.getElementById("heroText").innerHTML = different[i]

    }, 5000)
}
