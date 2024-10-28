let speedfactor = 3;
let xspeed = speedfactor;
let yspeed = speedfactor;
let x = 0;
let y = 0;
let score = 0;
let goalX, goalY;
let safeZoneX, safeZoneY;

function setup() {
  createCanvas(800, 800);
  
  // set initial random locations for goal and safe zones
  goalX = random(width);
  goalY = random(height);
  safeZoneX = random(width);
  safeZoneY = random(height);
}

function draw() {
  background(220); // light gray background

  // draw the goal and safe zones
  fill(0, 255, 0); // green for goal zone
  ellipse(goalX, goalY, 50, 50);
  fill(0, 0, 255); // blue for safe zone
  ellipse(safeZoneX, safeZoneY, 100, 100);

  // calculate distance between follower and mouse
  let dx = mouseX - x;
  let dy = mouseY - y;
  let distance = dist(mouseX, mouseY, x, y);

  // move follower toward the mouse, unless the mouse is in the safe zone
  if (dist(mouseX, mouseY, safeZoneX, safeZoneY) > 50) {
    if (distance > 5) {
      x += (dx / distance) * xspeed;
      y += (dy / distance) * yspeed;
    }
  }

  // draw follower as a simple circle
  fill(255, 0, 0); // red for follower
  ellipse(x, y, 50, 50);

  // check if follower catches the mouse
  if (distance < 25) {
    score -= 1; // decrease score by 1
    x = random(width); // reset follower position
    y = random(height);
  }

  // check if mouse reaches goal zone
  if (dist(mouseX, mouseY, goalX, goalY) < 25) {
    score += 1; // increase score by 1
    goalX = random(width); // reset goal zone position
    goalY = random(height);
  }

  // display score
  fill(0);
  textSize(32);
  text("score: " + score, 10, 30);
}