function setup() {
createCanvas(600, 600);
}


function draw() {
background(142, 68, 173);

//head
fill(180, 117, 103);
ellipse(300,300,250,280);

//beard 
fill(0,0,0);
ellipse(300,400,250,80);
rect(175, 250, 25, 150);
rect(200, 300, 5, 80);
rect(400, 250, 25, 150);
rect(395, 300, 5, 100);

//hair
fill(0,0,0);
rect(175, 150, 250, 60);
rect(175, 180, 35, 75);
rect(390, 180, 35, 75);
ellipse(310,150,250,75);
ellipse(320,140,200,75);

//eyes
fill(255,255,255);
ellipse(255,280,40,30);
ellipse(345,280,40,30);

//pupils and eyebrows
fill(0,0,0);
ellipse(255,280,20,20);
ellipse(345,280,20,20);
fill(256,256,256);
ellipse(257,275,8,8);
ellipse(347,275,8,8);
fill(0,0,0);
rect(240,250,35,5);
rect(330,250,35,5);

//nose 

fill(64, 41, 36);
ellipse(305,340 ,8,5);
ellipse(295,340,8,5);
fill(180, 117, 103);
arc(300, 341, 25, 75, radians(180), radians(0));

//mouth
fill(191,152,123);
arc(300, 375, 80, 80, 0, PI);
fill(255,255,255);
rect(265,375,70,10);




}
