// var paragraph;
var paragraphs;

function setup(){
    createCanvas(400,200);
    background(0);

    for (var i = 0; i < 100; i++){
        var par = createP('rainbow!');
        par.position(random(500),random(500));
    }


    paragraph=select('#unicorn');
    paragraphs=selectAll('p');
    // paragraphs=selectAll('.rainbow');
    for(var i=0;i<paragraphs.length;i++){
        paragraphs[i].style('font-size','14pt');
        paragraphs[i].mouseOver(highlight);
        paragraphs[i].mouseOut(unhighlight);
    }

    
    paragraph.mouseOver(highlight);
    paragraph.mouseOut(unhighlight);
    var button=select('#button');
    button.mousePressed(canvasBg);
}

function highlight(){
    this.style('padding','16pt');
    this.style('background-color','#F0F');

}
function unhighlight(){
    this.style('padding','0pt');
    this.style('background-color','#FFF');

}

function canvasBg(){
    background(random(255));
}