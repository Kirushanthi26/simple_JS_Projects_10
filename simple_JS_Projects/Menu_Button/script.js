
var btn = document.getElementById("btn");
var nav = document.getElementById("nav");


btn.addEventListener("click", ()=>{
    btn.classList.toggle("active");
    nav.classList.toggle("active");
});

