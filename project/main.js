let openBtn = document.querySelector(".bi-list");
let closeBtn = document.querySelector(".bi-x-lg" );
let menu = document.querySelector(".Navbar__Menu");

openBtn.addEventListener("click", () => {
    openBtn.classList.toggle("hide");
    closeBtn.classList.toggle("hide");
    menu.classList.toggle("hidden");
})

closeBtn.addEventListener("click", () => {
    openBtn.classList.toggle("hide");
    closeBtn.classList.toggle("hide");
    menu.classList.toggle("hidden");
})