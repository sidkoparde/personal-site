/**
 * Adapted from Generative Art by Matt Pearson
 */

const num = 10;

class Circle {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.radius = random(100) + 10;
    this.fillcol = color(random(255), random(255), random(255));
    this.alph = random(255);
  }

  drawMe() {
    noStroke();
    fill(this.fillcol, this.alph);
    ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
  }
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  smooth();
  strokeWeight(1);
  fill(150, 50);
  drawCircles();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  setup();
}

function drawCircles() {
  for (let i = 0; i < num; i += 1) {
    const thisCirc = new Circle();
    thisCirc.drawMe();
  }
}

function draw() {}
