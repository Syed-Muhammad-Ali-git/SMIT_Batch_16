// var h1El = document.getElementById("h1");
var bulbEl = document.getElementById("bulb");
var btnEl = document.getElementById("btn");
var divEl = document.getElementById("container");
var isOpen = false;

var h1 = document.getElementsByClassName("h1");
// console.log(h1[0].innerHTML);

function handleBulbOnOff() {
    divEl.style.backgroundColor = "green";

    if (isOpen) {
        isOpen = false;
        bulbEl.src = "./images/Img1.gif";
        h1[0].innerHTML = "Bulb Off";
        btnEl.innerHTML = "Bulb On";
        h1[0].style.color = 'black';
    }

    else {
        isOpen = true;
        bulbEl.src = "./images/Img2.gif";
        h1[0].innerHTML = "Bulb On";
        h1[0].style.color = "red";
        btnEl.innerHTML = "Bulb Off";
        btnEl.style.backgroundColor = "black";
        btnEl.style.color = "white";
    };

    // console.log(isOpen);
};

// function handleClass() {
//     // console.log(h1El);
//     h1El.className = "head";
// };