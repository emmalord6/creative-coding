function setup() {
  // create a canvas
  createCanvas(400, 400);

  // disable animation
  noLoop();
}

function draw() {
  // set background color
  background(220);

  // draw the face
  fill(255, 220, 100);
  stroke('#FFDBE9');
  strokeWeight(5);
  circle(200, 200, 250);
  rectMode(CENTER);

  // draw the vertical eyes
  fill(255); // white part of the eye
  stroke(0);
  strokeWeight(2);
  ellipse(160, 170, 50, 80); // left eye
  ellipse(240, 170, 50, 80); // right eye

  fill(0); // pupil
  ellipse(160, 170, 30, 30); // left pupil
  ellipse(240, 170, 30, 30); // right pupil

  // draw the vertical mouth
  stroke(0);
  strokeWeight(8);
  fill(0); // outer mouth color
  ellipse(200, 260, 30, 70); // smaller outer vertical mouth shape
  fill(255); // inner mouth color
  ellipse(200, 260, 20, 60); // smaller inner vertical mouth shape
}