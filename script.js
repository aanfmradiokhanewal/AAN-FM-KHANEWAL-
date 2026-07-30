const slides=document.querySelectorAll(".slide");

let current=0;

function showSlide(){

slides.forEach(s=>s.classList.remove("active"));

current++;

if(current>=slides.length){
current=0;
}

slides[current].classList.add("active");

}

setInterval(showSlide,4000);
