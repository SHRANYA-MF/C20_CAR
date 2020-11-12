var zenia, torus, cyclap, wall;

function setup() {
  createCanvas(1600,400);

  speed=random(55,90);
  weight=random(400,1500)

  zenia = createSprite(400, 200, 50, 50);
  zenia.shapeColour =(225);
  zenia.velocityX = speed;

  /*torus = createSprite(300, 200, 50, 50);
  torus.shapeColour =(225);
  torus.velocityX = speed;

  cyclap = createSprite(200, 200, 50, 50);
  cyclap.shapeColour =(225);
  cyclap.velocityX = speed;*/

  wall = createSprite(1500,200,60,height/2);
  wall.shapeColour =(80,80,80);
  
} 

function draw() {
  background(0,255,150);  
  if(wall.x-zenia.x < (zenia.width+wall.width)/2)
  {
    zenia.velocityX=0; 
    var deformation=0.5 * weight * speed * speed/22509;

    if(deformation>180){
      zenia.shapeColour(255,0,0)
   } 

    if(deformation<180 && deformation<100){
      zenia.shapeColour(230,230,0)
    }
  
    if(deformation<100){
      zenia.shapeColour(0,250,0)
    }
  }
  drawSprites();
}
