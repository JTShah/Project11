//variables
var boy,boyRun;
var path,pathMove;
var leftborder,rightborder;

//Three Holy Functions
function preload() {
    
    pathMove = loadImage("path.png");
    boyRun = loadAnimation("Runner-1.png","Runner-2.png");

}

function setup() {
   
    createCanvas(400,400);

    path=createSprite(200,200);
    path.addImage(pathMove);
    path.velocityY = 4;
    path.scale=1.2;

    boy = createSprite(180,340,30,30);
    boy.scale=0.08;
    boy.addAnimation("JakeRunning",boyRun);

    leftborder=createSprite(0,0,100,800);
    leftborder.visable=false;

    rightborder=createSprite(410,0,100,800);
    rightborder.visible = false;
 
}

function draw() {

    background(0);
  path.velocityY = 4;
  
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftborder);
  boy.collide(rightborder);
  
  if(path.y > 400 ){
    path.y = height/2;
  } 



  drawSprites();
}
