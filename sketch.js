var bullet, wall;
var speed, weight, thickness;





function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  
  
  bullet=createSprite(50, 200, 50, 5);
  bullet.velocityX=speed;
  bullet.shapeColor="white";

  wall=createSprite(1200, 200, thickness, height/2);
  wall.shapeColor=color(80, 80, 80);
  
}

function draw() {
  background(0);  

  if(col(bullet,wall)){
    bullet.velocityX=0;
    var dm=0.5*weight*speed*speed/22500;

    if (dm > 10){
      wall.shapeColor="red";
    }

    if (dm <= 10 ){
      wall.shapeColor="green";
    }
    


  }
  drawSprites();
}

function col(b1, w1){
  b1rt=b1.x+b1.width;
  w1lt=w1.x;
  if(b1rt >= w1lt){
    return true;
  }
  return false;
}