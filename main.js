function preload(){

}
function setup(){
canvas=createCanvas(400,400);
canvas.position(450,100);
video=createCapture(VIDEO);
video.hide();
}
function draw(){
image(video,100,100,200,200);
fill("red");
stroke("red");
circle(40,40,40);
circle(40,350,40);
circle(350,40,40);
circle(350,350,40);

fill("green");
stroke("green");
rect(60,35,270,15)
rect(60,345,270,15)
rect(340,60,15,270)
rect(35,60,15,270)

}
function take_snapshot(){
    save("download.png");
}