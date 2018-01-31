function setup() {
  var myCanvas = createCanvas (800,250);
  myCanvas.parent ('mySketch');
}

function draw() {
  var x=50;
  var y=70;
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(240);
  }
  ellipse(mouseX, mouseY, x, y);

}