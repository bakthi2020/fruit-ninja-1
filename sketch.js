var knifeSwoodhsword;
var PLAY=1;
var END=0;
var gamestate=1;
var sword,swordimage,score;
var fruitgroup,enemygroup;
var enemyGroup;
var fruit,fruit1,fruit2,fruit3,fruit4,monster,alien1,alien2;
var gameover, gameoversound,gameoverimage,fruitsound;

function preload(){
swordimage=loadImage("sword.png");
gameover= loadSound("gameover.mp3");
knife=loadSound("knifeSwooshSound.mp3")
fruit1=loadImage("fruit1.png");
fruit2=loadImage("fruit2.png");
fruit3=loadImage("fruit3.png");
fruit4=loadImage("fruit4.png");
gameoverimage=loadImage("gameover.png");
  alien=loadAnimation("alien1.png","alien2.png");
}
function setup() {
createCanvas(680,560);
 sword=createSprite(40,200,20,20);
 sword.addImage("sword",swordimage);
sword.scale=0.7;
  
fruitgroup=createGroup();
enemygroup=createGroup();
         
score=0;
  
 gameover=createSprite(350,250,20,100);
 gameover.addImage("gameover",gameoverimage);
 gameover.visible=false;
gameover.scale=0.5;
  
}
function draw(){
         
background(" blue");
  
textSize(20);
fill=("black");
text("SCORE : "+score,300,30);
          
fruits();
enemy();

if(gamestate===PLAY){
sword.y=World.mouseY;
sword.x=World.mouseX;
}
  if(fruitgroup.isTouching(sword)){       
 fruitgroup.destroyEach();
knifeSwooshSound.play();
  score=score+2;
 }
  if(gamestate===END){
 sword.addImage("gameover",gameoverimage);
   gameover.visible=true;
   gameover.scale=1;
  fruitgroup.destroyEach();
 enemygroup.destroyEach();
   sword.x=300;
    sword.y=300;
   fruitgroup.setVelocityEach(0);
   enemygroup.setVelocityEach(0);
   }
   if(enemygroup.isTouching(sword)){
   gamestate=END;
 }
   drawSprites();
}
function fruits(){
if(World.frameCount%80===0){
 fruit=createSprite(700,400,20,20);
fruit.scale=0.2;
  if(fruitsGroup.isTouching(sword)){
   gameState=END;
   //gameover sound
   gameoverSound.play();
  
  
  
  
r=Math.round(random(1,4));
  
if(r==1){
  fruit.addImage("fruit",fruit1);
 } else if(r==2){
   fruit.addImage("fruit",fruit2);
 } else if(r==3){
   fruit.addImage("fruit",fruit3);
 }else{
   fruit.addImage("fruit",fruit4);
}
 fruit.y=Math.round(random(50,340));
fruit.setLifetime=100;

position=Math.round(random(1,2));
if(position==1){
 fruit.x=700;
  fruit.velocityX=-(7+(score/4));
 }
  else
   {
 if(position==2){
   fruit.x=0;
 fruit.velocityX=(7+(score/4));
 }
 }
 fruitgroup.add(fruit);
  }
}
function enemy(){
 if(World.frameCount%100===0){
 monster=createSprite(700,400,20,20);
 monster.addAnimation("monster",alien);
  monster.y=Math.round(random(100,300));
 monster.velocityX=-(8+(score/10));
 monster.setLifetime=50;
 enemygroup.add(monster);
if(enemysGroup.isTouching(sword)){
   gameState=END;
   //gameover sound
   gameoverSound.play();
 }
        }
}