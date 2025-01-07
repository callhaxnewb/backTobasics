function setup() {
    createCanvas(500,500);
    createP("kawaiiii")
    createElement("h1","yare yare 2025");
  }
  
  function draw() {
    background(0);
    fill(255);
    rectMode(CENTER);
    
    rect(width/2,height/2,200,200)
  }
  
  function mousePressed(){
    createElement("p",
      "my fav number is "+random(10,20)``
    )
  }