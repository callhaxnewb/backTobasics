function setup(){
    noCanvas();
    for(var i = 0; i < 10; i++){
        var p = createA('#','blueberries');
        var x = floor(random(innerWidth));
        var y = floor(random(innerHeight));
        p.position(x,y);
        p.addClass('blueberry');
        p.mousePressed(becomeApple);
        
    }

    for( var i = 0; i < 10; i++){
        var p = createA('#','apples');
        var x = floor(random(innerWidth));
        var y = floor(random(innerHeight));
        p.position(x,y);
        p.addClass('apples');
    }

}

function becomeApple(){
    console.log('this is happening');
    this.removeClass('blueberries');
    this.addClass('apples');
}


