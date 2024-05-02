let circleX = 450;
let circleY = 650;
let bananaX = 325;
let bananaY = 525;
let maze;
let monke;
let banana;
let font;
let bananas = 0;
let actualScore = 500;
let topScore = [0, 0, 0];
let inGame = true;
let victory = false;

function preload() {
  maze = loadImage("Mazerunner127.png");
  monke = loadImage("Monke2.png");
  banana = loadImage("Banana.png");
  font = loadFont("MazeFont.TTF");
}

function setup() {
  createCanvas(800, 800);
  textFont(font);
  textSize(40);
}

function draw() {
  if (inGame) {
    background(0);
    image(maze, 0, 0);
    fill(255);
    image(monke, circleX-25, circleY-25);
    stroke(255, 0, 0);
    noStroke();
    stroke(255);
    textSize(30);
    fill(50, 0, 0);
    text("Score: " + actualScore, 15, 60);
    image(banana, bananaX, bananaY);
    fill(255);
  } else {
    background(0);
    if (victory) {
      text("You made it. Congrats!", 48, 240);
      text("Top Score:", 48, 340);
      for (let i = 0; i < topScore.length; i++) {
        text(topScore[i], 48, 370 + (i * 30));
      }
    } else {
      textSize(17);
      text("You have to collect all of the bananas. Try again.", 48, 240);
    }
    text("Press 'r' to restart the game", width / 2 - 100, 500);
  }
}

function keyPressed() {
  if (inGame) {
    if (keyCode === UP_ARROW) {
      circleY -= 50;
      actualScore--;
    }

    if (keyCode === DOWN_ARROW) {
      circleY += 50;
      actualScore--;
    }

    if (keyCode === LEFT_ARROW) {
      circleX -= 50;
      actualScore--;
    }

    if (keyCode === RIGHT_ARROW) {
      circleX += 50;
      actualScore--;
    }

    if (circleX > 310 && circleX < 390 && circleY > 510 && circleY < 590) {
      bananas = 1;
      bananaX = 425;
      bananaY = 425;
    }

    // Add other collision conditions here...

  } else {
    if (key === 'r' || key === 'R') {
      restartGame();
    }
  }
}

function finishGame(result) {
  inGame = false;
  victory = result;
  if (victory) {
    topScore.push(actualScore);
    topScore.sort((a, b) => b - a);
    topScore = topScore.slice(0, 3);
  }
}

function restartGame() {
  inGame = true;
  victory = false;
  actualScore = 500;
  bananas = 0;
  bananaX = 325;
  bananaY = 525;
  circleX = 450;
  circleY = 650;
}
