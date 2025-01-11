var textbox;
var slider;
var paragraph;

function setup(){
    noCanvas();
    textbox=createElement('input','enter text');
    slider=createSlider(10,64,16);
    paragraph=createElement("p",'starting text');

    // textbox.changed(doSomething); //change happens when you hit enter
    textbox.input(doSomething);
    slider.input(updateSize);
}

function doSomething(){
    paragraph.html(textbox.value()); 
}

function updateSize(){
    paragraph.style("font-size",slider.value() + "pt");
}