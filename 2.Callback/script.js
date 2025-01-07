var bgcolor;
var button1;

function setup() {
  canvas=createCanvas(500,500);
  bgcolor=color(255);
  button=createElement("button","go go go go");
  button.mousePressed(changeColor);
  button2=createElement("h1","yare yare 2025");
  
}


function changeColor(){
  bgcolor=color(random(255));
}

// function mousePressed(){
//   button.mousePressed(changeColor);
  
// }

function draw() {
  background(bgcolor);
  fill(255,0,175);
  rectMode(CENTER);
  
  rect(width/2,height/2,200,200)
}
