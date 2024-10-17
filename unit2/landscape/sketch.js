// for my generative landscape, i decided to create an ocean with a beautiful gradient background and a moon that moves with each page refresh. 


// references: https://p5js.org/reference/p5/let/
let moonX; // variable to store the moon's x position
let moonY; // variable to store the moon's y position

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
  // https://p5js.org/reference/p5/bezierVertex/

  beginShape(); // begin a new shape for the waves
  vertex(0, height); // start at the bottom-left corner
  bezierVertex(100, height * 0.8, 250, height * 0.7, 400, height * 0.7); // combine the first wave
  bezierVertex(550, height * 0.55, 700, height * 0.8, 800, height * 0.6); // create the second wave
  vertex(width, height); // finish at the bottom-right corner
  endShape(CLOSE); // complete the shape

  // draw the moon
  // reference: https://p5js.org/reference/p5/ellipse/
  fill(255); // set the fill color to white
  noStroke(); // disable outlines for the moon
  ellipse(moonX, moonY, 80, 80); // draw the moon at a random position
}