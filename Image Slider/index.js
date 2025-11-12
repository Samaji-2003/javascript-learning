const slides = document.querySelectorAll(".slides img");
let slideIndex =0;
let intervalId = null;
//initial();

document.addEventListener("DOMContentLoaded", initial)

function initial(){
    slides[slideIndex].classList.add("active");
    intervalId = setInterval(nextSlide, 3000);
    console.log(intervalId);
}

function showSlide(index){

    if(index >= slides.length){
        slideIndex = 0;
    }

    else if(index <0){
        slideIndex = slides.length -1;
    }
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });
    slides[slideIndex].classList.add("active");
}

function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
    intervalId = setInterval(nextSlide, 3000);
}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
    clearInterval(intervalId);
    intervalId = setInterval(nextSlide, 3000);
}
