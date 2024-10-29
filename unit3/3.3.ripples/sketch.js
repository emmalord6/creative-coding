let ripplers = []; // array for ripples

class Rippler {
  constructor(x, y) {
    this.x = x; // x position
    this.y = y; // y position
    this.d = 0; // diameter
  }

  draw() {
    this.d += 1; // expand ripple
    stroke(200, 162, 200); // pastel purple
    noFill(); // no fill
    circle(this.x, this.y, this.d); // draw ripple
  }
}

function setup() {
  createCanvas(600, 600); // canvas size
  background(245, 200, 210); // light, cool pink background
}

function draw() {
  background(245, 200, 210); // clear background
  strokeWeight(2);

  // draw each ripple
  for (let i = 0; i < ripplers.length; i++) {
    ripplers[i].draw();
  }
}

function mousePressed() {
  // add multiple ripples for wave effect
  for (let i = 0; i < 5; i++) {
    let newRippler = new Rippler(mouseX, mouseY);
    newRippler.d = i * 10; // stagger start size
    ripplers.push(newRippler);
  }
}