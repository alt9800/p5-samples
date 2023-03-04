const UNIT = 12; // each unit in the world is 32 pixels.
const WIDTH = 100; // width, in world units.
const HEIGHT = 100; // height, in world units.

const pos = {x:1,y:1}

function setup() {
  // width, height
  createCanvas(WIDTH * UNIT, HEIGHT * UNIT);
}

function draw() {

  clear();

  //rect(1 * UNIT, 1 * UNIT, UNIT, UNIT);
  

  // ... fill function
  let red = 0;
  let green = 100;
  let blue = 255;
  fill(red, green, blue); 
  
  rect(pos.x * UNIT, pos.y * UNIT, UNIT, UNIT)

  // ... grid draw loop
    
  //(x1,y2,x2,y2)
  // Horizontal line
  for (y = 0; y < HEIGHT; y++) {
  //(x1,y2,x2,y2)
    line(0, UNIT * y, WIDTH * UNIT, UNIT * y);
  }

  
  // Vertical line
  for (x = 0; x < WIDTH; x++) {
    //(x1,y2,x2,y2)
    line(UNIT * x, 0, UNIT * x, HEIGHT * UNIT);
  }
  
  // ... rest of draw function

  if (keyIsDown(LEFT_ARROW)) {
    pos.x--;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    pos.x++;
  }

  if (keyIsDown(UP_ARROW)) {
    pos.y--;
  }

  if (keyIsDown(DOWN_ARROW)) {
    pos.y++;
  }
  
}