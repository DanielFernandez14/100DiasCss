//El toggle cambia un valor de un estado a otro, generalmente de activo a inactivo, o de visible a oculto, y viceversa.

const Menu = document.querySelector('.menu');


let lineTop = document.querySelector('.line1');
let line = document.querySelector('.line2');
let lineButtom = document.querySelector('.line3');


Menu.addEventListener('click', ()=> {
    lineTop.classList.toggle("top");
    line.classList.toggle("centro");
    lineButtom.classList.toggle("buttom");
})
