var car, wall, defomation;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  speed=random(55, 90);
  weight=random(400, 1500);
  car= createSprite(1500, 200, 60, height/2);
  wall=createSprite(1500,200,60,height/2);
  console.log(speed);
  car.velocityX= speed;
}

function draw() {
  background(255,255,255);  
  drawSprites();
  car.isTouching(wall); 
if(wall.x-car.x < (car.width+wall.width)/2)
{
var deformation= 0.5 * weight * speed * speed/22509
if(deformation>180){
  car.shapeColor=color(255,0,0)
}
if(defomation<180 && defomation>100){
  car.shapeColor=color(230,230,0)
}
if(defomation<100){
  car.shapeColor=color(0,255,0)
}
}
}