let canvas = document.getElementById("pong-canvas");
let context = canvas.getContext("2d");

const game_height = 600;
const game_width = 750;

canvas.width = game_width;
canvas.height = game_height;

//canvas.style.background = "#ffc107";
//Class for player 1, 2, and ball
class Element {
    constructor(x, y, width, height, color, speed, gravity) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.speed = speed;
        this.gravity = gravity;
    }
}
//Player 1
const bumper1 = new Element(10, 250, 20, 100, "#fff", 2, 2);

//Player 2
const bumper2 = new Element((game_width - 30), 250, 20, 100, "#fff", 2, 2);

//Ball
const mainBall = new Element((game_width / 2), (game_height / 2), 15, 15, "#fff", 1, 1);

//This draws the bumpers on the canvas
function drawObject(object) {
    context.fillStyle = object.color;
    context.fillRect(object.x, object.y, object.width, object.height);
}

function ballMove() {
    if (mainBall.y + mainBall.gravity <= 0 || mainBall.y + mainBall.gravity >= game_height) {
        mainBall.gravity = mainBall.gravity * -1;
        mainBall.y += mainBall.gravity;
        mainBall.x += mainBall.speed;
    } else {
        mainBall.y += mainBall.gravity;
        mainBall.x += mainBall.speed;
    }

    ballWallCollision();
}
//Collision detecttion
function ballWallCollision() {
    if (mainBall.x + mainBall.speed <=0 || mainBall.x + mainBall.speed + mainBall.width >= game_width) {
        mainBall.y += mainBall.gravity
        mainBall.speed = mainBall.speed * -1
        mainBall.x += mainBall.speed;
    } else {
        mainBall.y += mainBall.gravity;
        mainBall.x += mainBall.speed;
    }
    drawElements();
}

//Draws elements on canvas
function drawElements(){
    context.clearRect(0, 0, game_width, game_height)
    drawObject(bumper1);
    drawObject(bumper2);
    drawObject(mainBall);
}
function updateGame(){
    ballMove();
    window.requestAnimationFrame(updateGame)
}
updateGame();

let player1Score = 0;
let player2Score = 0;




