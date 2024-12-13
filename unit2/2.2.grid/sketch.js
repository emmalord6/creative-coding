// I decided to animated my grid exercise and bring it to life. This transformation makes each square move dynamically, creating an engaging visual experience.

function setup() {
  // create a canvas of size 1200x1200 pixels
  createCanvas(1200, 1200);
  frameRate(15); // lower frame rate for slower animation
}

function draw() {
  // set the background color to a light gray
  background(220);
  
  // define the number of columns and rows for the grid
  // reference: https://editor.p5js.org/icm4.0/sketches/YsZmQqfxJ
  let cols = 8;
  let rows = 8;

  // calculate the width and height of each grid cell
  // referenced this for help: https://editor.p5js.org/icm4.0/sketches/YsZmQqfxJ
  let w = width / cols;
  let h = height / rows;

  // loop through each column
  // referenced these for looping: 
  // https://p5js.org/tutorials/repeating-with-loops/
  // https://p5js.org/reference/p5/let/
  for (let i = 0; i < cols; i++) {
    // loop through each row
    for (let j = 0; j < rows; j++) {
      // set position for each grid cell
      let x = i * w;
      let y = j * h;

      // set random stroke weight, stroke color, and fill color
      strokeWeight(random(1, 5));
      stroke(random(255), random(255), random(255));
      fill(random(255), random(255), random(255), 150);

      // animate the position of the squares
      let offsetX = map(noise(frameCount * 0.005 + x), 0, 1, -w * 0.1, w * 0.1); // slower noise change
      let offsetY = map(noise(frameCount * 0.005 + y), 0, 1, -h * 0.1, h * 0.1); // slower noise change

      // draw a square in the center of the grid cell with animated position
      // reference: https://p5js.org/reference/p5/rect/
      let squareSize = w * 0.8; // size of the square
      rect(x + w * 0.1 + offsetX, y + h * 0.1 + offsetY, squareSize, squareSize); // draw the square
    }
  }
}