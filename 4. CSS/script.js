var bgcolor;
var button;
var slider;
var nameInput;
var txt;

function setup(){
    canvas=createCanvas(900,400);
    bgcolor=color(25);
    txt=createP("your name");
    button=createButton("go go go go");
    button.mousePressed(changeStyle)
    // createP("");
    slider=createSlider(10,100,90);
    txt.mouseOver(changeStyle);
    txt.mouseOut(revertStyle);
   
}

function draw(){
    background(bgcolor);
    fill(120,90,50);
    ellipse(width/2,height/2,slider.value()*3,slider.value()*3)
}

function changeStyle(){
   txt.style("background-color","pink");
   txt.style("color","black")
   txt.style("padding","24px");
}

function revertStyle(){
    txt.style("background-color","purple");
    txt.style("padding","8px");
}
