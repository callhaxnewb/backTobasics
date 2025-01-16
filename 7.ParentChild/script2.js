var happyList=['coding','cycling','eating'];

function setup(){
    noCanvas();

    var button = select('#button');
    button.mousePressed(addItem);
}

function addItem(){
    var r = floor(random(0,happyList.length));
    var li = createElement('li',happyList[r]);
    li.parent('happyList')
}