var shapes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
  shapes.forEach(s => s.display());
}

function draw() {
  // mobile
  if (touches.length > 0) {
    var s = new shape(touches);
    shapes.push(s);
  }

  if (s) {
    s.display();
  }
}

// this prevents dragging screen around
function touchMoved() {
  return false;
}