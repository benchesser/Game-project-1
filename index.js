let canvas = document.getElementById("pong-canvas");
let context = canvas.getContext("2d");

const game_height = 600;
const game_width = 750;

canvas.width = game_width;
canvas.height = game_height;

//canvas.style.background = "#ffc107";
//Class for player 1 and 2
class Bumper {
    constructor(x, y, width, height, color, speed) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.speed = speed;
    }
}
//Class for the ball
class Ball {
    constructor(x, y, radius, color, speed) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.speed = speed;
    }
}
//Player 1
const bumper1 = new Bumper(10, 250, 20, 100, "#fff", 2);

//Player 2
const bumper2 = new Bumper((game_width - 30), 250, 20, 100, "#fff", 2);

//Ball
const mainBall = new Ball()

//This draws the bumpers on the canvas
function drawObject(object) {
    context.fillStyle = object.color;
    context.fillRect(object.x, object.y, object.width, object.height);
}

drawObject(bumper1);
drawObject(bumper2);




