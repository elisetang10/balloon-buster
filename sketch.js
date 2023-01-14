var bow, arrow, arrows, scene;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var score=0;

function preload(){
  backgroundImage = loadImage("background.png");
  arrowImage = loadImage("arrow.png");
  bowImage = loadImage("bow.png");
  green_balloonImage = loadImage("green_balloon.png");
  red_balloonImage = loadImage("red_balloon.png")
  blue_balloonImage = loadImage("blue_balloon.png")
  pink_balloonImage = loadImage("pink_balloon.png")
}

function setup() {
  createCanvas(400, 400);
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
   score = 0    
   bow = createSprite(380,220,20,50)
   bow.addImage(bowImage)
   redB = new Group()
   blueB = new Group()
   pinkB = new Group()
   greenB = new Group()
   arrows = new Group()
}

function draw() {
 background(0);
    scene.velocityX = -3 
    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  bow.y = World.mouseY
  if(keyWentDown("space")){
    createArrow()
  }
  var select_balloon = Math.round(random(1,4));
  if(World.frameCount%100 == 0){
    if(select_balloon == 1){
      redBalloon()
    }else if(select_balloon == 2){
      pinkBalloon()
    }else if(select_balloon == 3){
      greenBalloon()
    }else{
    blueBalloon()
    }
  }
  if(arrows.isTouching(redB)){
    redB.destroyEach()
    arrows.destroyEach()
    score = score + 2
  }
  if(arrows.isTouching(greenB)){
    greenB.destroyEach()
    arrows.destroyEach()
    score = score + 3
  }
  if(arrows.isTouching(blueB)){
    blueB.destroyEach()
    arrows.destroyEach()
    score = score + 1
  }
  if(arrows.isTouching(pinkB)){
    pinkB.destroyEach()
    arrows.destroyEach()
    score = score + 5
  }
  drawSprites();
  text("score: "+ score, 300,50);
}
 function createArrow() {
  var arrow = createSprite(360,bow.y,60,10)
  arrow.addImage(arrowImage)
  arrow.scale = 0.3
  arrow.velocityX = -6
  arrows.add(arrow)
  arrow.lifetime = 100
}

function redBalloon() {
  var red = createSprite(0, Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redB.add(red)
}
function greenBalloon() {
  var green = createSprite(0, Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  greenB.add(green)
}
function pinkBalloon() {
  var pink = createSprite(0, Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1;
  pinkB.add(pink)
}
function blueBalloon() {
  var blue = createSprite(0, Math.round(random(20,370)), 10, 10)
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueB.add(blue)
}
