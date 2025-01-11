var paragraphs;

function setup(){
    createCanvas(100,100);
    background(0);

    // paragraph=select('#unicorn');
    // paragraphs=selectAll('p');
    paragraphs=selectAll('.rainbow');
    for(var i=0;i<paragraphs.length;i++){
        paragraphs[i].style('font-size',12*(i+1)+'pt');
    }

    var button=select('button');
    button.mousePressed(canvasBg);
}

function canvasBg(){
    background(random(255));
}