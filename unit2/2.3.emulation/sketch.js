// I decided to emulate Frieder Nake's 1966 piece titled "Quadrate werden rot."
// Here is the link to the piece: https://collections.vam.ac.uk/item/O1284901/quadrate-werden-rot-plotter-drawing-frieder-nake/

function setup() {
  // Create the canvas
  createCanvas(170, 170); // Adjusted canvas size
  
  // Disable animation
  noLoop();

  // Define the size of each square
  let cellSize = width / 17;

  // Set the background color
  background('#f2e9dd');

  // Draw the grid
  for (let i = 0; i < 17; i++) {
    for (let j = 0; j < 17; j++) {
      // Draw the squares
      fill('#f2e9dd'); // Set the fill color for the square
      noStroke(); // Remove stroke for the fill
      rect(i * cellSize, j * cellSize, cellSize, cellSize); // Draw a filled square at position (i, j) with calculated cell size
      //Used https://www.w3schools.com/jsref/canvas_rect.asp for help

      // Draw the light blue perimeter
      stroke(173, 216, 230); // Set stroke color to light blue
      strokeWeight(2); // Set the stroke weight to 2 pixels
      noFill(); // Remove filling for the perimeter
      rect(i * cellSize, j * cellSize, cellSize, cellSize); // Draw the outline of the square at position (i, j) with the same cell size
    }
  }

  // Define a fixed position for the red square in the center but off-centered
  let redX = 8.5; // Off-centered horizontally from the middle
  let redY = 8.5; // Off-centered vertically from the middle

  // Draw the red square with a tan fill and a red border
  fill('#f2e9dd'); // Set the fill color for the red square
  noStroke(); // Disable stroke for the fill
  rect(redX * cellSize, redY * cellSize, cellSize, cellSize); // Draw a filled square at the red square's position with calculated cell size
  
  // Draw the red border for the red square
  stroke('red'); // Set stroke color to red
  strokeWeight(2); // Set the stroke weight to 2 pixels
  noFill(); // Disable filling for the border
  rect(redX * cellSize, redY * cellSize, cellSize, cellSize); // Draw the outline of the red square at its position
}