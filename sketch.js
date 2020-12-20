var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var SurvivalTime=0;
var ground,ground1,ground2;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  ground1 = loadImage("ground2.png");

 
}



function setup() {
  createCanvas(600,600)
monkey=createSprite(60,550,20,20);
  monkey.addAnimation("mm",monkey_running);
  monkey.scale=0.2
 ground=createSprite(200,550,600,5);
  ground.addImage(ground1)
  ground.velocityX=-7 
  ground2=createSprite(200,553,600,5);
  ground2.visible=false;
  
  bananaGroup=new Group();
}


function draw() {
  background("white");
drawSprites();
  monkey.collide(ground2)
   
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  
  if (keyDown("space") && monkey.y >400){
    monkey.velocityY=-18;       
}
monkey.velocityY=monkey.velocityY+0.8
  bananas();
  obtacles();
 
  stroke("black");
  textSize(20);
  fill("black");
  SurvivalTime=SurvivalTime+Math.round(getFrameRate()/60)
  text("Survival Time :"+SurvivalTime,250,50)
}

function bananas(){
  if(frameCount%80===0){
    banana=createSprite(200,200,20,20);
    banana.addImage(bananaImage);
    banana.scale=0.2 ;  
    banana.y=Math.round(random(220,300))
    banana.x=Math.round(random(600,600))
  banana.velocityX=-7
    bananaGroup.add(banana);
     banana.lifetime=600;
  }
 
}
function obtacles(){
  if(frameCount%300===0){
  obstacle=createSprite (300,530,20,20);
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.2;
  obstacle.y=Math.round(random(530,530));
  obstacle.x=Math.round(random(600,600));
  obstacle.velocityX=-7;
}
}



