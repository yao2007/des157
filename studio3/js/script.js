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


'use strict'
var i=80;


var pixel = document.querySelector('#pixel');
var pixelInterval= setInterval(moveDiv, 1500);//change the second parameter to move the pixel faster/slower
var section = document.querySelector('#container');
var w = section.offsetWidth;
var h = section.offsetHeight;

pixel.addEventListener("click", updateScore);
var scoreCount=0;

//adding a timer (counts 30 seconds)
var count =30;
var counter = setInterval(timingOut, 1000);

pixel.addEventListener("click", eating);

pixel.addEventListener("click", updateLife);
var life =0;
var lifeCount=0;

var m = document.getElementById('move');
m.addEventListener('mousedown', mouseDown, false);
window.addEventListener('mouseup', mouseUp, false);

function mouseUp() {
    window.removeEventListener('mousemove', move, true);
}

function mouseDown(e) {
    window.addEventListener('mousemove', move, true);
}

function move(e) {
    m.style.top = e.clientY + 'px';
    m.style.left = e.clientX + 'px';
};
// define moveDiv
function moveDiv(){

  // get the Width and Height of section

  console.log(h);
  // get random values for new position
  // The random() generates a random number between 0 and 1
  //The floor() method rounds a number DOWNWARDS to the nearest integer,
  var newLeft = (Math.floor(Math.random() * (w - 45 ) )  ) + 'px';
  var newTop = (Math.floor(Math.random() * (h - 45 ) ) )+ 'px';


  // update pixel location
  pixel.style.left = newLeft;
  pixel.style.top = newTop;
}
function updateScore() {
  scoreCount++;
    document.getElementById("score").innerHTML = "Score: "+ scoreCount;
}

function updateLife() {
  lifeCount++;
  if(life< Math.floor(lifeCount/3))
  {
   life=Math.floor(lifeCount/3); document.getElementById("life").innerHTML = "Life: "+ life;
   }
}

function timingOut()
{
  count=count-1;
  if (count < 0)
  {
     return;
  }
  document.getElementById("timerId").innerHTML = "Timer: "+ count;
}

var s= Snap(800,600);


var bigCircle = s.circle(150, 150, 80);

bigCircle.attr({
    fill: "#00306E",
    stroke: "#90C3D4",
    strokeWidth: 2
});

function eating(){
  var i = i +5;

  bigCircle = s.circle(150, 150, i);
}
