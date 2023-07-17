img = "";
status = "";
objects = [];

function preload () {
img = loadImage('dog_cat.jpg');
}

function setup() {
    canvas = crateCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById('status').innerHTML = "status : Detecting Objects";
}

function draw () {
    imgae(img, 0, 0, 640, 420);

    if(status != "")
    {
    }

    fill("#FF0000");
    text("dog", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350 );

    fill("#FF0000");
    text("Cat", 320, 120);
    noFill();
    stroke("#FF0000");
    rect(300, 90, 270, 320 );
}

function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult (error, reults) {
if (error) {
    console.log(error);
}
console.log(results);
objects = results;
}