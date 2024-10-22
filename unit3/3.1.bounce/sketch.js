// for my bounce exercise, i created a moving circle, and the background changes each time the circle bounces.

// control variables for the circle's position and speed
let x = 100;
let y = 100;
let xspeed = 3;
let yspeed = 4;
let circleSize = 80;

// pastel colors for background
let pastelColors = [
  [255, 179, 186], // red
  [255, 223, 186], // orange
  [255, 255, 186], // yellow
  [186, 255, 201], // green
  [186, 225, 255], // blue
  [219, 186, 255], // purple
  [255, 186, 238]  // pink
];

// variable to store current background color
let currentColor = [240, 220, 255]; // initial background color (light lilac)

function setup() {
  createCanvas(600, 600); // canvas size
}

function draw() {
  background(currentColor); // update background to current color

  // check for collision with left and right edges
  // references: https://p5js.org/reference/p5/floor/, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
  // if the circle hits a side, reverse the x direction and choose a random pastel color for the background
  if (x < circleSize / 2 || x > width - circleSize / 2) {
    xspeed = xspeed * -1; // reverse the x direction
    currentColor = pastelColors[floor(random(pastelColors.length))]; // change to a random pastel color when the circle bounces
  }

  // check for collision with top and bottom edges
  // if the circle hits the top or bottom, reverse the y direction and change the background color
  if (y < circleSize / 2 || y > height - circleSize / 2) {
    yspeed = yspeed * -1; // reverse the y direction
    currentColor = pastelColors[floor(random(pastelColors.length))]; // change to a random pastel color when the circle bounces
  }

  x = x + xspeed; // iterate x
  y = y + yspeed; // iterate y

  // display the circle
  // reference: https://p5js.org/reference/p5/ellipse/
  fill(200, 160, 255); // set the circle's color to lilac
  noStroke(); // disable the outline for the circle
  ellipse(x, y, circleSize, circleSize); // draw the circle at the new position
}