var bullet,wall;

var speed,weight,thickness;


function setup() {
  createCanvas(1600,400);

  speed = random(-40,-90);
  weight = random(1900,800);
  thickness = random(90,150);

  bullet = createSprite(50,200,50,20);
  bullet.velocityX = speed;
  bullet.shapeColor = color("white");
  
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = color("white");
}

function draw() {
  background("blue"); 
  
  if(wall.x=bullet.x < (bullet.width+wall.width)/2){
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/22509;
    if(damage > 180){
      wall.shapeColor = color("red");
    }
    if(damage<180 && damage>100){
      wall.shapeColor = color("yellow");
    }
    if(damage < 100){
      wall.shapeColor = color("green");
    }
  }
  drawSprites();
}