// I made the waves move to upgrade my generative landscape based on feedback! Doing this was super fun, and it brought the piece together. 

// references: https://p5js.org/reference/p5/let/
let moonX; // variable to store the moon's x position
let moonY; // variable to store the moon's y position
let waveMovement = 0; // variable to help move the waves

function setup() {
  // create the canvas width and height
  createCanvas(800, 800);

  // set random position for the moon at the top of the canvas
  moonX = random(50, width - 50); // keep it within the canvas
  moonY = random(50, 150); // keep it within the top area
}

// references: 
// https://p5js.org/reference/p5/map/
// https://p5js.org/reference/p5/lerpColor/
// https://p5js.org/reference/p5/stroke/
// https://p5js.org/reference/p5/line/
function draw() {
  // set the background with a gradient
  // loop through the height of the canvas to create a smooth gradient
  for (let i = 0; i <= height; i++) {
    let inter = map(i, 0, height, 0, 1); // determine position in gradient
    let startColor = color(100, 50, 150); // starting color for the gradient
    let endColor = color(0, 0, 255); // ending color for the gradient
    let c = lerpColor(startColor, endColor, inter); // create the gradient color
    stroke(c); // set the stroke color
    line(0, i, width, i); // draw a horizontal line across the width of the canvas
  }

  // draw the ocean waves
  noStroke(); // disable outlines for the wave shape
  fill(0, 0, 139, 180); // set the fill color to dark blue

  // references: 
  // https://p5js.org/reference/p5/beginShape/
  // https://p5js.org/reference/p5/vertex/

  beginShape(); // begin a new shape for the waves
  vertex(0, height); // start at the bottom-left corner

  // create wave effect using sine function
  for (let x = 0; x <= width; x += 20) {
    let y = height * 0.8 + sin((x + waveMovement) * 0.05) * 20;
    vertex(x, y); // create vertex at the wave position
  }

  vertex(width, height); // finish at the bottom-right corner
  endShape(CLOSE); // complete the shape

  waveMovement += 2; // update movement to move waves

  // draw the moon
  // reference: https://p5js.org/reference/p5/ellipse/
  fill(255, 200); // set the fill color to white with reduced opacity
  noStroke(); // disable outlines for the moon
  ellipse(moonX, moonY, 80, 80); // draw the moon at a random position
}