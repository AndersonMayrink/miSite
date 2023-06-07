
const btnMenu = document.querySelector("#btnMenu");
const menu = document.querySelector("#menu");
btnMenu.addEventListener("click", function(){
    menu.classList.toggle("mostrar")
});


const subMenuBtn = document.querySelectorAll(".submenu-btn");
for( let i=0; i< subMenuBtn.length; i++) {
    subMenuBtn[i].addEventListener("click", function(){
        if(window.innerWidth < 1024){
            const subMenu = this.nextElementSibling;
            const height = subMenu.scrollHeight;
if(subMenu.classList.contains("desplegar")){
    subMenu.classList.remove("desplegar");
    subMenu.removeAttribute("style");
} else {
    subMenu.classList.add("desplegar");
    subMenu.style.height = height + "px";

}

            
        }
    });
}



/*

let totalSlides = document.querySelectorAll('.slider--item').length;
let currentSlide = 0;

document.querySelector('.slider--width').style.width = `calc(100vw * ${totalSlides})`;
document.querySelector('.slider--controls').style.height = `${document.querySelector('.slider').clientHeight}px`;


function goPrev() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    updateMargin();
}


function goNext() {
    currentSlide++;
    if (currentSlide > (totalSlides-1)) {
        currentSlide = 0;        
    }
    updateMargin();
}

function updateMargin() {
    let sliderItemWidth = document.querySelector('.slider--item').clientWidth;
    let newMargin = (currentSlide * sliderItemWidth);
    document.querySelector('.slider--width').style.marginLeft = `-${newMargin}px`;
}
setInterval(goNext, 15000);

*/


const imgArray = [
    './assets/images/1.png',
    './assets/images/2.png',
    './assets/images/3.png'
]

const img = document.querySelector('#slide')
//const img = document.getElementById('slide')
let i = 0

const slideShow = () => {
    img.src = imgArray[i]
    i = ( i < imgArray.length - 1) ? i+1 : 0
}

const interval = () => {
    setInterval(slideShow, 7000)
}











