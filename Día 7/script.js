const buscar= document.querySelector(".bx.bx-search");
const menu= document.querySelector(".menu-icon");

let buscadore = document.querySelector(".search");
let note = document.querySelector(".note");
let listas = document.querySelector(".lista");

buscar.addEventListener("click", ()=>{
    buscadore.classList.toggle("input");
});

menu.addEventListener("click", ()=>{
    note.classList.toggle("active");
    listas.classList.toggle("activo");
})
