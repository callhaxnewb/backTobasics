var sliders=[];
var angle=0;

function setup(){
    noCanvas(); 
    // mainSlider=createSlider(0,100,0);
    for ( var i =0; i<100; i++){
        sliders[i]=createSlider(0,255,50);
    }

}

function draw(){
    var offset=0  ;
    for( var i = 0; i<sliders.length;i++){
        var x=map(sin(angle+offset),-1,1,0,255); 
        var y=map(sin(angle+offset),-1,1,255,0);
        if(i%2==0){
            sliders[i].value(x);
        }else{
            sliders[i].value(y);
        }
        offset+=0.025;   
    }
    angle+=0.1
}