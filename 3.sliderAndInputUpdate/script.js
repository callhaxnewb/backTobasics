var bgcolor;
var button;
var slider;
var nameInput;
var nameP;

function setup(){
    canvas=createCanvas(900,400);
    bgcolor=color(25);
    nameP=createP("your name");
    button=createButton("go go go go");
    button.mousePressed(changeColor)
    createP("");
    slider=createSlider(10,100,4);
    nameInput=createInput('type your name')
    nameP.mouseOver(mouseover);
    nameP.mouseOut(mouseout);
    nameInput.changed(updateText); //enter only
    nameInput.input(updateText) //real time
}

function draw(){
    background(bgcolor);
    fill(120,90,50);
    rectMode(CENTER);
    ellipse(width/2,height/2,slider.value()*3,slider.value()*3)
    text(nameInput.value(), 10,20);
    // nameP.html(input.value()); 
}

function updateText(){
    nameP.html(nameInput.value());
}
function mouseover(){
    nameP.html("mouse is over me, moove nigga!!")
}

function mouseout(){
    nameP.html("hop on broski")
}

function changeColor(){
    var rx=random(255);
    var ry=random(255);
    var rz=random(255);
    bgcolor=color(rz,ry,rz);
}