var css = document.querySelector("h3")
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient")
var button = document.querySelector("button")

color1.classList.add("inputc")
color2.classList.add("inputc")

function changeColor (){
    body.style.background = "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";
  css.textContent = body.style.background;
}

function changeColorButtom (){
    color1.value = randomGenerate();
    color2.value = randomGenerate();
    changeColor();
}

function randomGenerate (){
let maxVal = 0xFFFFFF; // 16777215
let randomNumber = Math.random() * maxVal; 
randomNumber = Math.floor(randomNumber);
randomNumber = randomNumber.toString(16);
let randColor = randomNumber.padStart(6, 0);   
 return (`#${randColor.toUpperCase()}`);
}


button.addEventListener("click", changeColorButtom)
color1.addEventListener("input", changeColor)
color2.addEventListener("input", changeColor)
