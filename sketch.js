var bullet1,bullet2,bullet3,bullet4;

var wall1,wall2,wall3,wall4;

var thickness,weight,damage;                                                                                                                                                                                                                
var object1,object2;                                                                                                                                                                                                                
function setup() {                                                                                                                                                                                                                
  createCanvas(1600,400);                                                                                                                                                                                                                
  bullet1=createSprite(50, 50, 15, 15);                                                                                                                                                                                                                

  bullet2=createSprite(50, 120, 15, 15);                                                                                                                                                                                                                

  bullet3=createSprite(50, 190, 15, 15);                                                                                                                                                                                                                

  bullet4=createSprite(50, 240, 15, 15);                                                                                                                                                                                                                

  thickness=random(22,83);                                                                                                                                                                                                                
  wall1=createSprite(1200,50,10,30);                                                                                                                                                                                                                
  wall2=createSprite(1200,120,10,30);                                                                                                                                                                                                                
  wall3=createSprite(1200,190,10,30);                                                                                                                                                                                                                
  wall4=createSprite(1200,240,10,30);                                                                                                                                                                                                                
                                                                                                                                                                                                                  
  weight=random(30,52); 
  speed=random(50,70);
  
}     

function draw() {                                                                                                                                                                                                                
  background(0);

  bullet1.velocityX=speed; 
  bullet2.velocityX=speed;
  bullet3.velocityX=speed;
  bullet4.velocityX=speed;

  

  damage=0.5*weight*speed*speed/thickness*thickness*thickness;

  if(Istouching(bullet1,wall1)){
    bullet1.velocityX=0;  
    if(Istouching(bullet1,wall1) && damage>10){
    wall1.shapeColor="red";
    }
    if(Istouching(bullet1,wall1) && damage<10){
      wall1.shapeColor="green";
    }
  }
    if(Istouching(bullet2,wall2)){
      bullet2.velocityX=0;  
      if(Istouching(bullet2,wall2) && damage>10){
      wall2.shapeColor="red";
      }
      if(Istouching(bullet2,wall2) && damage<10){
        wall2.shapeColor="green";
      }
    }
      if(Istouching(bullet3,wall3)){
        bullet3.velocityX=0;  
        if(Istouching(bullet3,wall3) && damage>10){
        wall3.shapeColor="red";
        }
        if(Istouching(bullet3,wall3) && damage<10){
          wall3.shapeColor="green";
        }
      }
        if(Istouching(bullet4,wall4)){
          bullet4.velocityX=0;  
          if(Istouching(bullet4,wall4) && damage>10){
          wall4.shapeColor="red";
          }
          if(Istouching(bullet4,wall4) && damage<10){
            wall4.shapeColor="green";
          }
        }
           drawSprites();
        }

function Istouching(object1,object2){

  if(object1.x-object2.x<object2.width/2+object1.width/2 && 
    object2.x-object1.x<object2.width/2+object1.width/2){
    return true;
  }else{
    return false;
  }
}