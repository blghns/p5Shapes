function shape(points) {
  this.points = points;

  this.display = function() {
    var r = map(noise(this.points[0].x / 10), 0, 1, 0, 256);
    var g = map(noise(this.points[0].y / 10), 0, 1, 0, 256);
    var b = map(noise((this.points[0].x + this.points[0].y) / 10), 0, 1, 0, 256);
    var a = map(noise(r + g + b), 0, 1, 0, 256);
    fill(r, g, b, a);
    stroke(r, g, b, a);
    beginShape();
    this.points.forEach(p => vertex(p.x, p.y));
    endShape(CLOSE);
  }
}