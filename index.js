let canvas = document.getElementById("pong-canvas");
let context = canvas.getContext("2d");

const game_height = 600;
const game_width = 750;

canvas.width = game_width;
canvas.height = game_height;

//canvas.style.background = "#ffc107";

window.addEventListener("keypress", doKeyDown, false);
//bumper movement
function doKeyDown(e) {
    const key = e.key;
    if(key =="w" && bumper1.y - bumper1.gravity > 0)
        bumper1.y -= bumper1.gravity * 4;
    else if (key == "s" && bumper1.y + bumper1.height + bumper1.gravity < game_height)
        bumper1.y += bumper1.gravity * 4;

    if(key =="i" && bumper2.y - bumper2.gravity > 0)
        bumper2.y -= bumper2.gravity * 4;
    else if (key == "k" && bumper2.y + bumper2.height + bumper2.gravity < game_height)
        bumper2.y += bumper2.gravity * 4;
}

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




