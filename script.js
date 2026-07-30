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
window.onload=function(){

document.getElementById("loader").style.display="none";

}

document.getElementById("topBtn").onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}
function updateClock(){

const now = new Date();

const options = {
weekday:'long',
year:'numeric',
month:'long',
day:'numeric',
hour:'2-digit',
minute:'2-digit',
second:'2-digit'
};

document.getElementById("liveClock").innerHTML =
"🇵🇰 Pakistan Time : " + now.toLocaleString('en-PK', options);

}

setInterval(updateClock,1000);

updateClock();
