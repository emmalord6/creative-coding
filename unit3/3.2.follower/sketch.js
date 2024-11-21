let speedfactor = 3;
let xspeed = speedfactor;
let yspeed = speedfactor;
let x = 0;
let y = 0;
let score = 0;
let followerImg; // variable for the follower image

function preload() {
  followerImg = loadImage("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/25d45014-8cc3-4c98-b02c-5a0cf3a55ddd/dcopdcg-85a7601e-e7ca-4de8-96d6-28df58309247.png/v1/fill/w_900,h_703/domestic_cat_on_a_transparent_background_by_prussiaart_dcopdcg-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzAzIiwicGF0aCI6IlwvZlwvMjVkNDUwMTQtOGNjMy00Yzk4LWIwMmMtNWEwY2YzYTU1ZGRkXC9kY29wZGNnLTg1YTc2MDFlLWU3Y2EtNGRlOC05NmQ2LTI4ZGY1ODMwOTI0Ny5wbmciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.T83qgIKNtUxl8ieMBnF9eW7d5qO_jLXDhFZBTF4pF80");
}

function draw() {
  background(220);
  ellipse(400, 400, 50, 50); // Draw a circle in the center
}
function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220); // light gray background

  // draw mouse position
  fill(200, 160, 255); // purple for mouse position
  ellipse(mouseX, mouseY, 30, 30); // circle to represent the mouse

  // calculate distance between follower & mouse
  let dx = mouseX - x;
  let dy = mouseY - y;
  let distance = dist(mouseX, mouseY, x, y);

  // move follower toward mouse
  if (distance > 5) {
    x += (dx / distance) * xspeed;
    y += (dy / distance) * yspeed;
  }


  imageMode(CENTER);
  image(followerImg, x, y, 150, 120); // Display the image at the follower position


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