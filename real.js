leftwristx=0;
rightwristx=0;
differenc = 0;
difference = 0;
function x(){
window.alert("The name of the application is font manipulator as It manipulates the size of the font.");
}
function preload(){
}
function setup(){
video = createCapture(VIDEO);
video.size(600, 1050);
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
video.position(0,-170);
canvas = createCanvas(668,450);
canvas.position(600, 130);
}
function gotPoses(results){
if(results.length > 0){
console.log(results);
leftwristx =  results[0].pose.leftWrist.x;
rightwristx = results[0].pose.rightWrist.x;
differenc = floor(leftwristx - rightwristx);
difference = differenc-75;
}
}
function draw(){
document.getElementById("font_size_displayer").innerHTML = difference + " px";
textSize(difference);
background('orange');
text('Dhyanam', 50, 400);
}
function modelLoaded(){
console.log("Posenet is initialised");
}