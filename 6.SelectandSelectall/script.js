// var paragraph;
var paragraphs;

function setup(){
    createCanvas(400,200);
    background(0);
    // paragraph=select('#unicorn');
    // paragraphs=selectAll('p');
    paragraphs=selectAll('.rainbow');
    for(var i=0;i<paragraphs.length;i++){
        paragraphs[i].style('font-size','24pt');
    }
    // paragraph.mouseOver(changeBackground);
    var button=select('#button');
    button.mousePressed(canvasBg);
}

function changeBackground(){
    paragraph.style('background-color','#F0F')

}

function canvasBg(){
    background(random(255));
}