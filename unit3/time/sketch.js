// For my time project, I created a scene representing how we measure time through nature. The sky color and sun position shift to reflect each part of the day. At night, fireflies appear, and during the day, flowers fade in opacity.

function setup() {
  createCanvas(800, 600);
}

function draw() {
  let hr = hour(); // get current hour
  let min = minute(); // get current minute

  // background color based on time of day
  // reference: https://www.shecodes.io/athena/67661-how-to-change-background-color-based-on-time-of-day-with-javascript
  // reference: https://p5js.org/tutorials/conditionals-and-interactivity/
  if (hr >= 6 && hr < 12) {
    background(135, 206, 235); // morning (light blue)
  } else if (hr >= 12 && hr < 17) {
    background(70, 130, 180); // afternoon (brighter blue)
  } else if (hr >= 17 && hr < 18) {
    background(255, 140, 0); // sunset (orange)
  } else {
    background(0, 0, 60); // night (dark blue)
  }

  // sun position based on hour: higher in the morning, lower in the evening
  // reference: https://p5js.org/reference/p5/map/
  let sunY;
  if (hr >= 6 && hr < 18) {
    sunY = map(hr + min / 60, 6, 18, height * 0.1, height - 100); // map sun position from top to lower part of canvas
  } else {
    sunY = height + 100; // sun is off the screen at night
  }

  fill(255, 204, 0); // sun color
  noStroke();
  ellipse(width / 2, sunY, 130, 130); // sun size

  // calculate opacity for flowers based on time of day
  let opacity;
  if (hr >= 6 && hr < 17) {
    opacity = 255; // fully opaque in morning and afternoon
  } else if (hr >= 17 && hr < 18) {
    opacity = map(hr + min / 60, 17, 18, 255, 50); // fade opacity from 255 to 50 during sunset
  } else {
    opacity = 20; // almost transparent at night
  }

  // draw flowers with consistent opacity for petals, stem, and center
  for (let i = 0; i < 5; i++) {
    let x = width / 6 * (i + 1); // flower positions
    let y = height - 100;

    // flower stems with opacity
    stroke(34, 139, 34, opacity); // dark green color for stem
    strokeWeight(4);
    line(x, y, x, height);

    // draw smaller petals with the same opacity
    fill(255, 100, 150, opacity);
    noStroke();
    let petalSize = 40; // smaller petal size
    ellipse(x - petalSize / 2, y, petalSize, petalSize); // left petal
    ellipse(x + petalSize / 2, y, petalSize, petalSize); // right petal
    ellipse(x, y - petalSize / 2, petalSize, petalSize); // top petal
    ellipse(x, y + petalSize / 2, petalSize, petalSize); // bottom petal

    // flower center with the same opacity
    fill(255, 215, 0, opacity); // yellow color for center
    ellipse(x, y, 20, 20); // draw smaller center circle
  }

  // draw and animate fireflies at night with less frequent flashing
  if (hr >= 18 || hr < 6) { // show fireflies only at night
    for (let i = 0; i < 10; i++) { // draw 10 fireflies
      let x = random(width); // random x position
      let y = random(height * 0.5, height); // random y position (lower half)

      // rate at which fireflies flash
      // reference: https://p5js.org/reference/p5/frameCount/
      if (frameCount % int(random(50, 200)) === 0) { // flash every 50-200 frames
        fill(255, 255, 0); // solid yellow glow
        ellipse(x, y, 10, 10); // draw firefly
      }
    }
  }
}