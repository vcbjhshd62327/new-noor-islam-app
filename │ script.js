// ===============================
// Noor Islam App
// Main Script
// ===============================

// Dark Mode

const themeBtn = document.getElementById("themeBtn");

function loadTheme(){

const saved = localStorage.getItem("theme");

if(saved==="dark"){

document.body.classList.add("dark");

themeBtn.textContent="☀️";

}

}

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

localStorage.setItem("theme","dark");

themeBtn.textContent="☀️";

}else{

localStorage.setItem("theme","light");

themeBtn.textContent="🌙";

}

});

loadTheme();

// ===============================
// Smooth Cards Animation
// ===============================

const cards=document.querySelectorAll(".card");

cards.forEach((card,index)=>{

card.style.opacity="0";

card.style.transform="translateY(30px)";

setTimeout(()=>{

card.style.transition=".5s";

card.style.opacity="1";

card.style.transform="translateY(0)";

},index*100);

});

// ===============================
// Service Worker
// ===============================

if("serviceWorker" in navigator){

window.addEventListener("load",()=>{

navigator.serviceWorker.register("sw.js")

.then(()=>{

console.log("Service Worker Registered");

})

.catch(err=>{

console.log(err);

});

});

}

// ===============================
// Online / Offline
// ===============================

window.addEventListener("offline",()=>{

console.log("Offline");

});

window.addEventListener("online",()=>{

console.log("Online");

});

// ===============================
// Welcome
// ===============================

console.log("Noor Islam Loaded Successfully");

// ===============================
// Future Ready
// ===============================

// APIs
// Quran
// Audio
// Prayer
// Qibla
// Azkar
// Dua
// Tafsir
// Hadith

