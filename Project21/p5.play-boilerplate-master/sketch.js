var bullet,wall;
var speed,weight,thickness;


function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  bullet = createSprite(50,200,30,30);
  wall = createSprite(1000,200,thickness,800);
  wall.shapeColor = rgb(80,80,80);
  bullet.velocityX = speed;
  }

function draw() {
  background(0);
  
  if(wall.x - bullet.x < (bullet.width + wall.width)/2){
     
    bullet.velocityX = 0;
    var damage = (0.5 * weight * speed * speed)/(thickness * thickness * thickness);
    if(damage > 10){
       wall.shapeColor = "red";
     } else {
       wall.shapeColor = "green";
     }
  }

  drawSprites();
}