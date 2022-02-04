var box;

function setup() {
  createCanvas(1536,720);
  box = createSprite(200,200,50,80);
  box.shapeColor = "green";

  

}

function draw() {


  if (keyIsDown(RIGHT_ARROW)){
    box.position.x=box.position.x+4
    background("red"); 
  }
  if (keyIsDown(UP_ARROW)){
    box.position.y=box.position.y-4
    background("blue"); 
  }if (keyIsDown(DOWN_ARROW)){
    box.position.y=box.position.y+4
    background("purple"); 
  }if (keyIsDown(LEFT_ARROW)){
    box.position.x=box.position.x-4
    background("green"); 
  }
  
  drawSprites();

}