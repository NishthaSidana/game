function preload(){
  shinchan=loadImage("flat,1000x1000,075,f.jpg")
}
function setup() {
  createCanvas(1000,500);
   sprite= createSprite(200,200,40,80)
   sprite.addImage(shinchan)
   sprite.scale=0.1
}

function draw() 
{
  
  
if (keyDown("right_arrow"))
{
  background("yellow")
sprite.x=sprite.x+2

}
if(keyDown("left_arrow"))
{
  background("violet")
  sprite.x=sprite.x-2

}
if(keyDown("up_arrow"))
{
  background("pink")
  sprite.y=sprite.y-2
}
if(keyDown("down_arrow"))
{
  background("red")
  sprite.y=sprite.y+2
}
drawSprites()
}




