function preload(){}

function setup(){
    canvas = createCanvas(600, 400);
    canvas.position(110, 250);
    arjun = createCapture(VIDEO);
    arjun.hide();

    tint_color = "";
}

function draw(){
    image(arjun, 0, 0, 600, 400);
    tint(tint_color);
}

function take_snapshot(){
    save('filtered_image.jpg')
}

function tint_color_1(){
    tint_color = document.getElementById("color_name").value;
}