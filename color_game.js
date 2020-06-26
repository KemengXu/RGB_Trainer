var EASY = 3;
var HARD = 6;
var colors;
var pickedColor;
var slist = document.querySelectorAll(".square");
var answer = document.querySelector("#RGB");
var title = document.querySelector("#title");
var newGame = document.querySelector("#new");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var message = document.querySelector("#message");
var btn = document.querySelector("button")

init();

function init() {
    newGame.addEventListener("click", function(){
        if (colors.length == EASY) {easy.click();}
        else {hard.click();}
    });
    easy.addEventListener("click", function(){
        easy.classList.add("selected");
        hard.classList.remove("selected");
        startGame(EASY);
        for (var i = EASY; i < HARD; i++){
            slist[i].style.display = "none";
        }
    });
    hard.addEventListener("click", function(){
        hard.classList.add("selected");
        easy.classList.remove("selected");
        startGame(HARD);
        for (var i = EASY; i < HARD; i++){
            slist[i].style.display = "block";
        }
    });
    hard.click();
    answer.textContent = pickedColor;
    for (var i = 0; i < slist.length; i++) {
        slist[i].style.backgroundColor = colors[i];
        slist[i].addEventListener("click", function(){
            var clickedColor = this.style.backgroundColor;
            if (clickedColor == pickedColor) {
                changeColors();
                message.textContent = "CORRECT!";
                newGame.textContent = "PLAY AGAIN";
            } else {this.style.background = "#232323";message.textContent = "TRY AGAIN"}
        });
    }
}
function startGame(num) {
    colors = randColorGenerator(num);
    pickedColor = pickColor();
    answer.textContent = pickedColor;
    for (var i = 0; i < num; i++) {
        slist[i].style.backgroundColor = colors[i];
    }
    newGame.textContent = "NEW GAME";
}
function randColorGenerator(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}
function randomColor() {
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
function pickColor() {
    var ind = Math.floor(Math.random() * colors.length);
    return colors[ind];
}
function changeColors() {
    for (var i = 0; i < slist.length; i++) {
        slist[i].style.backgroundColor = pickedColor;
    }
    title.style.backgroundColor = pickedColor;
}


