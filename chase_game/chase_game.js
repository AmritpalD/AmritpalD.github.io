var ballx = 300;
var bally = 300;
var ballSize = 40;
var score =0;
var gameState= "L1";

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  img1 = loadImage('alien.png');
}

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(10);
} 


function draw() {
  background(120);
  
  if (gameState=="L1"){
  levelOne();
  } 
  if (gameState=="L2"){
   levelTwo(); 
  }
  if (gameState=="L3"){
   levelThree(); 
  }
  if (gameState=="L4"){
   levelFour(); 
    }
  if (gameState=="L5"){
   levelFive();
  }
  text(("Score: " + score), width/2, 40);
  

} // end draw


function levelOne(){
  text("Level 1", width/2, height-20);
  sight();
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(40, width-40);
    bally= random(60, height-60);
    score= score +1;
  }
  if(score>10){
// call level 2
 // fill(random(255));
 gameState= "L2";
  }
  //line(ballx, bally, mouseX, mouseY);
  ellipse(ballx, bally, ballSize, ballSize);
  
} // end level one

function levelTwo(){
  background(255,0,0);
  text("Level 2", width/2, height-20);
  sight();
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(40, width-40);
    bally= random(50, height-50);
    score= score +2;
  }
  if(score>20){
// lvel 3
   gameState = "L3";

  }
  
//  line(ballx, bally, mouseX, mouseY);
  ellipse(ballx, bally, ballSize, ballSize);
} // end level two

function levelThree(){
    background(0,255,0);
  text("Level 3", width/2, height-20);
  sight();
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(40, width-40);
    bally= random(60, height-60);
    ballSize=ballSize -1;
    score= score +3;
  }
  if(score>30){
// level 4
   gameState = "L4";
   

  }
  
//  line(ballx, bally, mouseX, mouseY);
  fill(255,155,0);
  //noStroke();
  ellipse(ballx, bally, ballSize, ballSize); 
} // end level three

function levelFour(){
    background(0, 100,200);
    
    text("Level 4", width/2, height-20);
    sight();
    var distToBall= dist(ballx, bally, mouseX, mouseY);
    if (distToBall <ballSize/2){
    ballx = random(40, width-40);
    bally= random(60, height-60);
    ballSize=ballSize -1;
      if (ballSize<5){
      ballSize=ballSize+(20||30||40||50);
    }
      else {
      ballSize=ballSize-(4||8||12);
    }
    
    score= score +4;
  }
  if(score>40){
// level 4
 gameState = "L5";
  }  
//  line(ballx, bally, mouseX, mouseY);
  fill(255,0,0);
  //noStroke();
  ellipse(ballx, bally, ballSize, ballSize);
} // end level four

function levelFive(){
    background(100, 100, 100);
    
    text("Level 5", width/2, height-20);
    sight();
    var distToBall= dist(ballx, bally, mouseX, mouseY);
    if (distToBall <ballSize/2){
    ballx = random(40, width-40);
    bally= random(60, height-60);
    ballSize=ballSize -1;
      if (ballSize<5){
      ballSize=ballSize+(20||30||40||50);
    }
      else {
      ballSize=ballSize-(4||8||12);
    }
    
    score= score +5;
  }
  if(score>50){
// level 4
   gameState = "L6";
  }  
//  line(ballx, bally, mouseX, mouseY);
  fill(0,255,0);
  //noStroke();
  ellipse(ballx, bally, ballSize, ballSize);
} // end level five

function levelSix(){
    background(0, 255, 0);
    
    text("Level 6", width/2, height-20);
    sight();
    var distToBall= dist(ballx, bally, mouseX, mouseY);
    if (distToBall <ballSize/2){
    ballx = random(40, width-40);
    bally= random(60, height-60);
    ballSize=ballSize -1;
      if (ballSize<5){
      ballSize=ballSize+(20||30||40||50);
    }
      else {
      ballSize=ballSize-(4||8||12);
    }
    
    score= score +10;
  }
  if(score>50){
// level 4
   gameState = "L1";
  }  
//  line(ballx, bally, mouseX, mouseY);
  fill(0,255,0);
  //noStroke();
  ellipse(ballx, bally, ballSize, ballSize);
} // end level five

function sight(){
 image(img1, mouseX-10, mouseY-10);
}
