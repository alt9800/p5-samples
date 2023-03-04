let font;
let fontSize = 120;
let message = "Alt9800";
let particles = [];

function preload() {
  font = loadFont('assets/Roboto-Black.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(RGB, 255, 255, 255, 1);
  textFont(font);
  textSize(fontSize);
  textAlign(CENTER, CENTER);
  noStroke();
  fill(255);
  createParticles();
}

function draw() {
  background(0);
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.applyForce(createVector(0, 0.05));
    p.update();
    p.edges();
    p.display();
  }
  fill(255, 255, 255, 0.1);
  textSize(fontSize);
  textAlign(CENTER, CENTER);
  text(message, width / 2, height / 2);
}


function createParticles() {
  let points = font.textToPoints(message, width / 2 - fontSize * 1.5, height / 2 + fontSize * 0.35, fontSize, {
    sampleFactor: 0.1
  });
  for (let i = 0; i < points.length; i++) {
    let p = new Particle(points[i].x, points[i].y);
    particles.push(p);
  }
}

class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(random(-1, 1), random(-1, 1));
    this.acc = createVector(0, 0);
    this.size = 5;
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  edges() {
    if (this.pos.x < 0 || this.pos.x > width) {
      this.vel.x *= -1;
    }
    if (this.pos.y < 0 || this.pos.y > height) {
      this.vel.y *= -1;
    }
  }

  display() {
    ellipse(this.pos.x, this.pos.y, this.size);
  }
}
