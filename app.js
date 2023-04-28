const hamburger = document.querySelector(".hamburger");
const cross = document.querySelector(".cross");
const menu = document.querySelector(".links");
const modal = document.querySelector(".modal");

hamburger.addEventListener("click", () => {
    menu.classList.add("links--on");
    modal.style.display = "block";
    hamburger.style.display = "none"
    cross.style.display = "block"
})

cross.addEventListener("click", () =>{
    menu.classList.remove("links--on");
    modal.style.display = "none"
    cross.style.display = "none"
    hamburger.style.display = "block"
})