var PLAY = 1;
var END = 0;
var gameState = PLAY;

var cat,catImage;
var bg,bgImage
var ground;
var daimond,daimondImage;
var daimondsGroup;
var stone,stoneImage;
var stonesGroup;


function preload(){
catImage=loadAnimation("images/row1.png","images/row2.png","images/row3.png")
bgImage=loadImage("images/bg.jpg")
daimondImage=loadImage("images/daimond.png")
sImage=loadImage("images/stone.png")
boxbImage=loadImage("images/boxb.png")
boxsImage=loadImage("images/boxs.png")
}
function setup(){
  
createCanvas(windowWidth,windowHeight);


bg=createSprite(0,0,windowWidth,windowHeight);
bg.addImage("back",bgImage);
bg.scale=2
bg.velocityX=-3

cat=createSprite(100,height-200,100,100)
cat.addAnimation("catrunning",catImage)
cat.scale=1.5;

ground=createSprite(100,height-200,200,10);
ground.visible=false;

daimondsGroup = createGroup();
stonesGroup = createGroup();

}

function draw(){

if (gameState==PLAY){

bg.velocityX=-3;

if (keyDown("space")){
  cat.velocityY=-12;
}
cat.velocityY = cat.velocityY + 0.5

  if(bg.x<0){
    bg.x=bg.width/2
    }
    spawndaimond();
    spwanstone();

  if(stonesGroup.isTouching(cat)){
      gameState = END;
  }
}

else if(gameState==END){
stonesGroup.setVelocityXEach(-1)
daimondsGroup.setVelocityXEach(-1)
stonesGroup.setVelocityXEach(0);
daimondsGroup.setVelocityXEach(0);
}
 
cat.collide(ground);

//cat.velocityY=cat.velocityY+0.5;


 

 
 drawSprites();
}
function spawndaimond() {
  
  if (frameCount % 100 === 0) {
     daimond = createSprite(width,100,40,10);
    daimond.y = Math.round(random(100,200));
    daimond.addImage("daimond",daimondImage);
    daimond.scale = 0.1
    daimond.velocityX = -3;
    
    daimond.lifetime = width;
    
    daimond.depth = cat.depth;
    cat.depth = cat.depth + 1;
  
   daimondsGroup.add(daimond);
  }
  
}

function spwanstone(){
    if (frameCount % 60 === 0){
      var stone = createSprite(width,height-200,40,10);
      stone.velocityX = -6;
   var rand = Math.round(random(1,2));
  switch(rand) {

 case 1: stone.addImage(boxbImage);
  break;
 case 2: stone.addImage(boxsImage)
  break;
 
default: break;
       }
               
       stone.scale = 0.5;
       stone.lifetime = width;
      
      stonesGroup.add(stone);
    }
   }





