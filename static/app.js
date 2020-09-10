const navButton = document.querySelector("#nav-button-mobile");
const filmsDiv = document.querySelector("#films-mobile");
const infoDiv = document.querySelector("#info-mobile");

const header = document.querySelector("header");
const content = document.querySelector("#content");


navButton.addEventListener("click", ()=> {
    filmsDiv.classList.toggle("hidden");
    infoDiv.classList.toggle("hidden");
})

header.addEventListener("click", () => {
    filmsDiv.classList.add("hidden");
    infoDiv.classList.add("hidden");
})

content.addEventListener("click", () => {
    filmsDiv.classList.add("hidden");
    infoDiv.classList.add("hidden");
})

