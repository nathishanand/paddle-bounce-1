var ball,img,paddle;
function preload() {
   /* preload your images here of the ball and the paddle */
  ballimg = loadImage("ball.png");
  paddleimg=loadImage("paddle.png")
}
function setup() {
  createCanvas(400, 400);
  /* create the Ball Sprite and the Paddle Sprite */
  /* assign the images to the sprites */
  ball=createSprite(104, 211, 20, 20);
  ball.addImage (ballimg);
  ball.velocityY=-6
  ball.velocityX=2;  
  paddle=createSprite(352,198, 20, 20);
  paddle.addImage(paddleimg)
 
  /* give the ball an initial velocity of 9 in the X direction */

}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
  edges=createEdgeSprites();
  ball.bounceOff(paddle);
  //Bounce Off the Left Edge only
  ball.bounceOff(edges[0]); 
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
 
  paddle.collide(edges);
  if(keyDown(UP_ARROW))
  {
   paddle.velocityY=-9
  }
  
  if(keyDown(DOWN_ARROW))
  {
   paddle.velocityY=9
  }
  drawSprites();
  
}

function explosion()
{
}

