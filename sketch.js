var bg,bgimg;
var cloud;
var cloud1,cloud2,cloud3,cloud4,cloud5,cloud6;
var theme;
var planeFly,planeShoot;
var Pplane;
var bullet;
var bulletimg;
var invisible,invisible1;
var bulletG,enemyG1,enemyG2,enemyG3,enemyG4,enemyG5,enemyG6,enemyG7,enemyG8,enemyG9,planeG1,planeG2;
var sh = 0;
var bird,birdFly,birdFly1;
var badPlaneFly;
var bird1,bird2,bird3,bird4,bird5,bird6,bird7,bird8,bird9,badp1,badp2,badp3;
var score,check;
var life1=3,life2=3;
var score1;
var gamestate;
var mylogo,mylogoimg;
var menuState="ani1";
var huh;
var play,how,cred,logo;
var playimg,howimg,credimg,logoimg;
var menu,intro;
var l;
var hows,creds,howsi,credsi;
var cloudG;
var die;
var dead;
var sho,bi;
function preload(){
bgimg = loadImage("Bg.png")
cloud1 = loadImage("cloud1.png");
cloud2 = loadImage("cloud2.png");
cloud3 = loadImage("cloud3.png");
cloud4 = loadImage("cloud4.png");
cloud5 = loadImage("cloud5.png");
cloud6 = loadImage("cloud6.png");
birdFly = loadAnimation("bird1.png","bird2.png");
birdFly1 = loadAnimation("bird1b.png","bird2b.png");
bulletimg = loadImage("Bullet.png");
theme=loadSound("theme.mp3");
intro = loadSound("intro.mp3");
menu = loadSound("menu.mp3");
planeFly = loadAnimation("Fly (1).png","Fly (2).png")
planeShoot = loadAnimation("Shoot (1).png","Shoot (2).png","Shoot (3).png","Shoot (4).png","Shoot (5).png");
badPlaneFly = loadAnimation("Fly 1.png","Fly 2.png");
dead = loadAnimation("dead.png");
mylogoimg = loadImage("mylogo.png");
logoimg = loadImage("logo.png");
playimg = loadImage("play.png");
  howimg = loadImage("how.png");
  credimg = loadImage("cred.png");
  howsi = loadImage("hows.png");
  credsi = loadImage("creds.png");
  die = loadSound("die.wav");
  sho = loadSound("shoot.mp3");
  bi = loadSound("bi.mp3");
}

function setup() {
 createCanvas(windowWidth,windowHeight);
 bg = createSprite(width/2,height/2);
 bg.addImage(bgimg);
 bg.scale = 1.5;
 bg.visible= false;

 gamestate= "no";

 plane=createSprite(50,height/2);
 plane.addAnimation("flying",planeFly);
 plane.addAnimation("shoot",planeShoot);
 plane.addAnimation("dead",dead);
 plane.scale = 0.2;
 plane.visible=false;

 invisible = createSprite(140,height/2,1,height);
 invisible.visible = false;

 invisible1 = createSprite(width + 10,height/2,1,height);
 invisible1.visible = false;

 bulletG = new Group();

 enemyG1 = new Group();
 enemyG2 = new Group();
 enemyG3 = new Group();
 enemyG4 = new Group();
 enemyG5 = new Group();
 enemyG6 = new Group();
 enemyG7 = new Group();
 enemyG8 = new Group();
 enemyG9 = new Group();

planeG1 = new Group();
planeG2 = new Group();

cloudG = new Group();

 score = 0;

 score1 = 0;

 l=0;

 mylogo=createSprite(width+100,height+100)
mylogo.addImage(mylogoimg);
mylogo.velocityX=-width/150;
mylogo.velocityY=-height/150;

play = createSprite(width/2,height/2.5+100)
play.addImage(playimg);
play.scale = 0.6;
play.visible= false;

how = createSprite(width/2,height/1.7+55)
how.addImage(howimg);
how.scale = 0.6;
how.visible= false;

cred = createSprite(width/2,height/1.27)
cred.addImage(credimg);
cred.scale = 0.6;
cred.visible= false;

logo = createSprite(-200,height/3);
logo.addImage(logoimg);

huh = createSprite(-240,-240,10,10);
huh.visible=false;

hows = createSprite(width/2,height/2);
hows.addImage(howsi);
hows.scale = 1.35;
hows.visible = false;

creds=createSprite(width/2,height/2);
creds.addImage(credsi);
creds.scale = 1.25;
creds.visible = false;
}

function draw() {
    background(255);
    drawSprites();
    if(keyDown("BACKSPACE")){
        theme.stop();
        menu.stop();
        die.stop();
        menu.loop();
      sh = 0;
        gamestate = "no";
        l=0;
        cloudG.destroyEach();
        enemyG1.destroyEach();
        enemyG2.destroyEach();
        enemyG3.destroyEach();
        enemyG4.destroyEach();
        enemyG5.destroyEach();
        enemyG6.destroyEach();
        enemyG7.destroyEach();
        enemyG8.destroyEach();
        enemyG9.destroyEach();
        planeG1.destroyEach();
        planeG2.destroyEach();
        bulletG.destroyEach();
        score = 0;
        score1 = 0;
        bg.visible = false;
        plane.visible = false;
        menuState = "ani2";
        creds.visible = false;
        hows.visible = false;
        logo.visible = true;
        cred.visible = true;
        how.visible = true;
        play.visible = true;
    }
    if(mylogo.isTouching(huh)){
        intro.play();
        huh.destroy();
       mylogo.destroy();
       menu.loop();
        menuState="ani2";
        logo.velocityX = 5;
      }
      if(menuState==="ani2"){
          if(logo.position.x = width/2){
              logo.velocityX = 0;
          }
        play.visible=true;
        how.visible=true;
        cred.visible=true;
        if(mousePressedOver(play)){
            plane.visible = true;
             bg.visible = true;
          sh = 0;
             gamestate = "play";
             menuState = "no";
             menu.stop();
             enemyG1.destroyEach();
             enemyG2.destroyEach();
             enemyG3.destroyEach();
             enemyG4.destroyEach();
             enemyG5.destroyEach();
             enemyG6.destroyEach();
             enemyG7.destroyEach();
             enemyG8.destroyEach();
             enemyG9.destroyEach();
             l=0;
             score = 0;
             theme.loop();
             plane.changeAnimation("flying",planeFly);
         }
         if(mousePressedOver(how)){
             hows.visible = true;
         }
         if(mousePressedOver(cred)){

            creds.visible = true;
         }
      }
      if(menuState==="no"){
        play.visible=false;
        cred.visible=false;
        how.visible=false;
        logo.visible=false;
      }
    if(gamestate==="play"){
    bg.visible=true;
    plane.visible=true;
    spawnClouds();

    if(keyDown("UP_ARROW")){
        plane.y-=5;
    }

    if(keyDown("DOWN_ARROW")){
        plane.y+=5;
    }

    if(keyWentUp("SPACE") && sh===0){
      sho.play();
        bulletshoot();
        sh=1;
    }

    if(bulletG.isTouching(invisible)){
        plane.changeAnimation("flying",planeFly);
    }

    if(bulletG.isTouching(invisible1) || bulletG.isTouching(enemyG1) || bulletG.isTouching(enemyG2) || bulletG.isTouching(enemyG3)
        || bulletG.isTouching(enemyG4) || bulletG.isTouching(enemyG5) || bulletG.isTouching(enemyG6) || bulletG.isTouching(enemyG7)
        || bulletG.isTouching(enemyG8) || bulletG.isTouching(enemyG9) || bulletG.isTouching(planeG2) || bulletG.isTouching(planeG1)){
        sh = 0;
    }
if(bulletG.isTouching(enemyG1) || bulletG.isTouching(enemyG2) || bulletG.isTouching(enemyG3)
        || bulletG.isTouching(enemyG4) || bulletG.isTouching(enemyG5) || bulletG.isTouching(enemyG6) || bulletG.isTouching(enemyG7)
        || bulletG.isTouching(enemyG8) || bulletG.isTouching(enemyG9) || bulletG.isTouching(planeG2) || bulletG.isTouching(planeG1)){
        bi.play();
    }
      
    if(bulletG.isTouching(enemyG1)){
        bulletG.destroyEach();
        enemyG1.destroyEach();
        score1 += 50;
    }
    if(bulletG.isTouching(enemyG2)){
        bulletG.destroyEach();
        enemyG2.destroyEach();
        score1 += 50;
    }
    if(bulletG.isTouching(enemyG3)){
        bulletG.destroyEach();
        enemyG3.destroyEach();
        score1 += 50;
    }
    if(bulletG.isTouching(enemyG4)){
        bulletG.destroyEach();
        enemyG4.destroyEach();
        score1 += 50;
    }
    if(bulletG.isTouching(enemyG5)){
        bulletG.destroyEach();
        enemyG5.destroyEach();
        score1 += 50;
    }
    if(bulletG.isTouching(enemyG6)){
        bulletG.destroyEach();
        enemyG6.destroyEach();
        score1 += 50;
    }
    if(bulletG.isTouching(enemyG7)){
        bulletG.destroyEach();
        enemyG7.destroyEach();
        score1+= 50;
    }
    if(bulletG.isTouching(enemyG8)){
        bulletG.destroyEach();
        enemyG8.destroyEach();
        score1 += 50;
    }
    if(bulletG.isTouching(enemyG9)){
        bulletG.destroyEach();
        enemyG9.destroyEach();
        score1 += 50;
    }
    if(bulletG.isTouching(planeG1)){
        bulletG.destroyEach();
        life1 -= 1;
        score1 += 100;
    }
    if(bulletG.isTouching(planeG2)){
        bulletG.destroyEach();
life2 -= 1;
score1 += 100;
    }
if(life1===0){
    life1=3;
    planeG1.destroyEach();
}
if(life2===0){
    life2=3;
    planeG2.destroyEach();
}
    if(enemyG1.isTouching(invisible1) || enemyG2.isTouching(invisible1) || enemyG3.isTouching(invisible1) ||
       enemyG4.isTouching(invisible1) || enemyG5.isTouching(invisible1) || enemyG6.isTouching(invisible1) ||
       enemyG7.isTouching(invisible1) || enemyG8.isTouching(invisible1) || enemyG9.isTouching(invisible1)){
        l=1;
    }
    if(l===1){
        score += Math.round(getFrameRate()/50);
    }
    spawnenemies()
 drawSprites();
textSize(30);
fill("white");
 text("distance: "+score+"m",width-250,50)
 textSize(30);
fill("white");
text("score: "+score1,30,50)
    }
    if(plane.isTouching(enemyG1) || plane.isTouching(enemyG2) || plane.isTouching(enemyG3) || 
       plane.isTouching(enemyG4) || plane.isTouching(enemyG5) || plane.isTouching(enemyG6) || 
       plane.isTouching(enemyG7) || plane.isTouching(enemyG8) || plane.isTouching(enemyG9) ||
       plane.isTouching(planeG2) || plane.isTouching(planeG1)){
    gamestate = "end";
      sh = 0;
    theme.stop();
    die.play();
    cloudG.setLifetimeEach(-1);
    cloudG.setVelocityXEach(0);
    enemyG1.destroyEach();
     enemyG2.destroyEach();
     enemyG3.destroyEach();
     enemyG4.destroyEach();
     enemyG5.destroyEach();
     enemyG6.destroyEach();
     enemyG7.destroyEach();
     enemyG8.destroyEach();
     enemyG9.destroyEach();
     planeG1.destroyEach();
     planeG2.destroyEach();
     plane.changeAnimation("dead",dead);
}
if (gamestate === "end"){
    textSize(35);
    fill("white");
    text("game over",width/2-30,height/2)
    textSize(20);
    fill("white");
    text("press enter to restart",width/2-35,height/2+ 30);
    if(keyDown("ENTER")){
        gamestate="play";
        plane.changeAnimation("flying",planeFly);
        cloudG.destroyEach();
        score=0;
        score1=0;
        l=0;
        theme.loop();
    }
}
}
function spawnClouds(){
    if(frameCount % 40 === 0) {
      var cloud = createSprite(width+ 30,0,10,40);
      cloud.y = Math.round(random(20,200));
      cloud.velocityX = -6;
    
      var rand = Math.round(random(1,6));
      switch(rand) {
        case 1: cloud.addImage(cloud1);
                break;
        case 2: cloud.addImage(cloud2);
                break;
        case 3: cloud.addImage(cloud3);
                break;
        case 4: cloud.addImage(cloud4);
                break;
        case 5: cloud.addImage(cloud5);
                break;
        case 6: cloud.addImage(cloud6);
                break;
        default: break;
      }

      plane.depth = cloud.depth;
      plane.depth += 1;  
            
      cloud.scale = 0.2;
      cloud.lifetime = 500;
      cloudG.add(cloud);
    }
  }
  function bulletshoot(){
      bullet = createSprite(75,-20)
      bullet.addImage(bulletimg);
      bullet.scale = 0.2;
      bullet.y = plane.y+15;
      bullet.velocityX = 30;
      bullet.lifetime = 700;

plane.changeAnimation("shoot",planeShoot);

bulletG.add(bullet);
  }
function spawnenemies(){
    if(frameCount % 500 === 0){

bird1 = createSprite(width+ 50,height/2);
bird1.lifetime= 700;
bird1.addAnimation("Fly",birdFly);
bird1.addAnimation("Fly1",birdFly1);
var rand1 = Math.round(random(1,2));
switch (rand1){
    case 1: bird1.changeAnimation("Fly",birdFly);
    bird1.velocityX = -3;
                break;
        case 2: bird1.changeAnimation("Fly1",birdFly1);
        bird1.velocityX = -5;
                break;
}
bird1.y = Math.round(random(20,height-20));
bird1.scale = 0.05;
enemyG1.add(bird1);
    }
    if(frameCount%550===0){
        bird2 = createSprite(width+ 50,height/2);
        bird2.lifetime= 700;
        bird2.addAnimation("Fly",birdFly);
        bird2.addAnimation("Fly1",birdFly1);
        var rand2 = Math.round(random(1,2));
        switch (rand2){
            case 1: bird2.changeAnimation("Fly",birdFly);
            bird2.velocityX = -3;
                        break;
                case 2: bird2.changeAnimation("Fly1",birdFly1);
                bird2.velocityX = -5;
                        break;
        }
        bird2.y = Math.round(random(20,height-20));
        bird2.scale = 0.05;
        enemyG2.add(bird2);
    }
    if(frameCount%600===0){
        bird3 = createSprite(width+ 50,height/2);
        bird3.lifetime= 700;
        bird3.addAnimation("Fly",birdFly);
        bird3.addAnimation("Fly1",birdFly1);
        var rand3 = Math.round(random(1,2));
        switch (rand3){
            case 1: bird3.changeAnimation("Fly",birdFly);
            bird3.velocityX = -3;
                        break;
                case 2: bird3.changeAnimation("Fly1",birdFly1);
                bird3.velocityX = -5;
                        break;
        }
        bird3.y = Math.round(random(20,height-20));
        bird3.scale = 0.05;
        enemyG3.add(bird3);
    }
    if(frameCount % 650 === 0){

        bird4 = createSprite(width+ 50,height/2);
        bird4.lifetime= 700;
        bird4.addAnimation("Fly",birdFly);
        bird4.addAnimation("Fly1",birdFly1);
        var rand4 = Math.round(random(1,2));
        switch (rand4){
            case 1: bird4.changeAnimation("Fly",birdFly);
            bird4.velocityX = -3;
                        break;
                case 2: bird4.changeAnimation("Fly1",birdFly1);
                bird4.velocityX = -5;
                        break;
        }
        bird4.y = Math.round(random(20,height-20));
        bird4.scale = 0.05;
        enemyG4.add(bird4);
            }
            if(frameCount%700===0){
                bird5 = createSprite(width+ 50,height/2);
                bird5.lifetime= 700;
                bird5.addAnimation("Fly",birdFly);
                bird5.addAnimation("Fly1",birdFly1);
                var rand5 = Math.round(random(1,2));
                switch (rand5){
                    case 1: bird5.changeAnimation("Fly",birdFly);
                    bird5.velocityX = -3;
                                break;
                        case 2: bird5.changeAnimation("Fly1",birdFly1);
                        bird5.velocityX = -5;
                                break;
                }
                bird5.y = Math.round(random(20,height-20));
                bird5.scale = 0.05;
                enemyG5.add(bird5);
            }
            if(frameCount%750===0){
                bird6 = createSprite(width+ 50,height/2);
                bird6.lifetime= 700;
                bird6.addAnimation("Fly",birdFly);
                bird6.addAnimation("Fly1",birdFly1);
                var rand6 = Math.round(random(1,2));
                switch (rand6){
                    case 1: bird6.changeAnimation("Fly",birdFly);
                    bird6.velocityX = -3;
                                break;
                        case 2: bird6.changeAnimation("Fly1",birdFly1);
                        bird6.velocityX = -5;
                                break;
                }
                bird6.y = Math.round(random(20,height-20));
                bird6.scale = 0.05;
                enemyG6.add(bird6);
            }
            if(frameCount % 800 === 0 && score < 2000){

                bird7 = createSprite(width+ 50,height/2);
                bird7.lifetime= 700;
                bird7.addAnimation("Fly",birdFly);
                bird7.addAnimation("Fly1",birdFly1);
                var rand7 = Math.round(random(1,2));
                switch (rand7){
                    case 1: bird7.changeAnimation("Fly",birdFly);
                    bird7.velocityX = -3;
                                break;
                        case 2: bird7.changeAnimation("Fly1",birdFly1);
                        bird7.velocityX = -5;
                                break;
                }
                bird7.y = Math.round(random(20,height-20));
                bird7.scale = 0.05;
                enemyG7.add(bird7);
                    }
                    if(frameCount%850===0 && score < 2000){
                        bird8 = createSprite(width+ 50,height/2);
                        bird8.lifetime= 700;
                        bird8.addAnimation("Fly",birdFly);
                        bird8.addAnimation("Fly1",birdFly1);
                        var rand8 = Math.round(random(1,2));
                        switch (rand8){
                            case 1: bird8.changeAnimation("Fly",birdFly);
                            bird8.velocityX = -3;
                                        break;
                                case 2: bird8.changeAnimation("Fly1",birdFly1);
                                bird8.velocityX = -5;
                                        break;
                        }
                        bird8.y = Math.round(random(20,height-20));
                        bird8.scale = 0.05;
                        enemyG1.add(bird8);
                    }
                    if(frameCount%900===0 && score < 2000){
                        bird9 = createSprite(width+ 50,height/2);
                        bird9.lifetime= 700;
                        bird9.addAnimation("Fly",birdFly);
                        bird9.addAnimation("Fly1",birdFly1);
                        var rand9 = Math.round(random(1,2));
                        switch (rand9){
                            case 1: bird9.changeAnimation("Fly",birdFly);
                            bird9.velocityX = -3;
                                        break;
                                case 2: bird9.changeAnimation("Fly1",birdFly1);
                                bird9.velocityX = -5;
                                        break;
                        }
                        bird9.y = Math.round(random(20,height-20));
                        bird9.scale = 0.05;
                        enemyG9.add(bird9);
                    }
                    if(frameCount%850===0 && score > 2000){
                        badp2 = createSprite(width+50,height/2)
                        badp2.lifetime = 700;
                        badp2.addAnimation("badfly",badPlaneFly)
                        badp2.velocityX = -7;
                        badp2.y = Math.round(random(45,height-45));
                        badp2.scale = 0.2;
                        planeG1.add(badp2);                    
                    }
                    if(frameCount%900===0 && score > 2000){
                        badp3 = createSprite(width+50,height/2)
                        badp3.lifetime = 700;
                        badp3.addAnimation("badfly",badPlaneFly)
                        badp3.velocityX = -7;
                        badp3.y = Math.round(random(45,height-45));
                        badp3.scale = 0.2;
                        planeG2.add(badp3);
                    }
}
