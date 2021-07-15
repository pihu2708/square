
function setup() {
  createCanvas(400,400);
  box=createSprite(200,65,80,80)

}

function draw() 
{
  background(30);
  if(keyDown('left')){
    box.velocityX=-4
  }
  if(keyDown('right')){
    box.velocityX=4
  }

drawSprites()
}




