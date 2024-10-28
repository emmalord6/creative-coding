let speedfactor = 3;
let xspeed = speedfactor;
let yspeed = speedfactor;
let x = 0;
let y = 0;
let score = 0;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220); // light gray background

  // draw mouse position
  fill(200, 160, 255); // purple for mouse position
  ellipse(mouseX, mouseY, 20, 20); // small circle to represent the mouse

  // calculate distance between follower & mouse
  let dx = mouseX - x;
  let dy = mouseY - y;
  let distance = dist(mouseX, mouseY, x, y);

  // move follower toward the mouse
  if (distance > 5) {
    x += (dx / distance) * xspeed;
    y += (dy / distance) * yspeed;
  }

  // draw follower as a simple circle
  fill(255, 105, 180); // red for follower
  ellipse(x, y, 50, 50);

  // check if follower catches the mouse
  if (distance < 25) {
    score -= 1; // decrease score by 1
    x = random(width); // reset follower position
    y = random(height);
  }

  // display score
  fill(0);
  textSize(32);
  text("score: " + score, 10, 30);
}