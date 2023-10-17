const canvas = document.querySelector("#canvas");
const screenGame = document.querySelector(".screen");
const pointSpan = document.querySelector("#points");
const pointOcorred = document.querySelector("#points-ocorred");
const recordOcorred = document.querySelector("#record-ocorred");
const play = document.querySelector("#play");
const ctx = canvas.getContext("2d");

const canvasWidth = 450;
const canvasHeight = 450;

canvas.width = canvasWidth;
canvas.height = canvasHeight;

const size = 15;
const fps = 120;
let GameOver = true;
let points = 0;

const GameLoop = () => {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    background();

    if(GameOver === true){
        canvas.classList.remove("active");
        screenGame.classList.add("active");
        recordOcorred.innerHTML = localStorage.getItem("record");
        pointOcorred.innerHTML = points;
    } else {
        canvas.classList.add("active");
        screenGame.classList.remove("active");

        snake.update();
        apple.update();
        colision();
        controls();
        pointSpan.innerHTML = points;
    }
}

play.addEventListener("click", () => { GameOver = false, points = 0; });
setInterval(() => GameLoop(), fps);