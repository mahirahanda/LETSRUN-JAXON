var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i
var coin, coinImg,coinscore;
var coin2, coinImg2;
var coin3, coinImg3;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  coinImg = loadImage("coin.png");
  coinImg2 = loadImage("coin.png");
  coinImg3 = loadImage("coin.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

//creating boy running
boy = createSprite(180,340,30,30);
boy.scale=0.08;
boy.addAnimation("JakeRunning",boyImg);
coin=createSprite(200,200,80,90);
coin2=createSprite(100,200,80,90);
  coin2.addImage(coinImg2);
  coin2.scale=0.3
  coin3=createSprite(300,200,80,90);
  coin3.addImage(coinImg3);
  coin3.scale=0.3;
// creating coins
  coin.addImage("coin1",coinImg);
  coin.scale=0.3
  
  
// create left Boundary
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;

//create right Boundary
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  textSize(10);
  text('coin Score', 1,200);
  textSize(10);
  text('0', 20,230);
  if(boy.isTouching(coin)) {
    coinscore = coinscore+1;
   }
  path.velocityY = 4;
  
  // boy moving on Xaxis with mouse
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
