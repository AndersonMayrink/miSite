
const btnMenu = document.querySelector("#btnMenu");
const menu = document.querySelector("#menu");
btnMenu.addEventListener("click", function () {
    menu.classList.toggle("mostrar")
});


const subMenuBtn = document.querySelectorAll(".submenu-btn");
for (let i = 0; i < subMenuBtn.length; i++) {
    subMenuBtn[i].addEventListener("click", function () {
        if (window.innerWidth < 1024) {
            const subMenu = this.nextElementSibling;
            const height = subMenu.scrollHeight;
            if (subMenu.classList.contains("desplegar")) {
                subMenu.classList.remove("desplegar");
                subMenu.removeAttribute("style");
            } else {
                subMenu.classList.add("desplegar");
                subMenu.style.height = height + "px";

            }


        }
    });
}


const imgArray = [
    './assets/images/1.png',
    './assets/images/2.png',
    './assets/images/3.png',
    './assets/images/chico-cielo.jpg',

]

const img = document.querySelector('#slide')
//const img = document.getElementById('slide')
let i = 0

const slideShow = () => {
    img.src = imgArray[i]
    i = (i < imgArray.length - 1) ? i + 1 : 0
}

const interval = () => {
    setInterval(slideShow, 20000);
}



                                              

/*
let hora = prompt("");

if (hora >= 12 && hora <= 18) {
    alert("Buenas tardes!")
} 
if (hora < 12 && hora >= 00) {
    alert("Buenos días!")
}
if (hora > 18 && hora <= 24) {
    alert("Buenas noches!")
}
*/





