var apples=[];
function setup(){
    noCanvas()
    var button=createButton('clear');
    for (var i = 0;i<5;i++){
        var p = createP('This is a link:');
        p.style('background-color','#CCC');
        p.style('padding','24px');

        var a = createA('#','apples');
        a.mousePressed(addPhoto);
        a.parent(p);
    }
    button.mousePressed(nuke);
}


function nuke(){
    for (var i = 0; i<apples.length;i++){
        apples[i].remove();
    }
    apples=[];
}

function addPhoto(){
    var img=createImg('apple.jpeg');
    img.size(100,100);
    apples.push(img);
    var paragraph=this.parent();
    img.parent(paragraph);

}
