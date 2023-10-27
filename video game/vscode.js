let currentLevel = 1;
let xPosFairy =265;
let yPosFairy =475;
let xSpeedFairy =0;
let ySpeedFairy =0;
let xPosCloud =200;
let yPosCloud =165;
let xSpeedCloud =2;
let ySpeedCloud =0.5;
let xPosCloud2 =200;
let yPosCloud2 =310;
let xSpeedCloud2 =-2;
let ySpeedCloud2 =0.5;
let distance;
let level1Completed=false;
let level2Completed=false;
let level3Completed=false;

function preload(){
  img1 =loadImage("images/myfairy.png")
  img2 =loadImage("images/stormcloud1.png")
  img3 =loadImage("images/potofgold.png")
  img4 =loadImage("images/stormcloud2.png")
  img5 =loadImage("images/backgroundclouds.png")
}

function setup() {
  createCanvas(600, 600);
  }

function draw() {
  background(150, 206, 255)
//   resizing images
  img2.resize(110,110)
  img1.resize(80, 100)
  img3.resize(130, 120)
  img4.resize(140, 140)
  img5.resize(600, 600)
    
//   Level 1
  if (currentLevel === 1) {
   image(img3, 330, 30)
// creating fairy/cloud collisions
   image(img5, 0, 0)
       if (dist(xPosFairy, yPosFairy, xPosCloud, yPosCloud)<50){
       background(255, 0, 0)
       textSize(300)
       text("X", 200, 300)
       xPosFairy=265
       yPosFairy=475
       }
  
    if (dist(xPosFairy, yPosFairy, xPosCloud2, yPosCloud2)<50){
       background(255, 0, 0)
       textSize(500)
       text("X", 200, 400)
       xPosFairy=265
       yPosFairy=475
       }
//    making fairy move 
    image(img1, xPosFairy, yPosFairy);
    xPosFairy+= xSpeedFairy
    yPosFairy+= ySpeedFairy
  
    if(xPosFairy<0 || xPosFairy>475||yPosFairy<0||yPosFairy>525){
       xPosFairy=265
       yPosFairy=475
       }
// making clouds move
    image(img2, xPosCloud, yPosCloud);
    xPosCloud+=xSpeedCloud
    yPosCloud+=ySpeedCloud
    if(xPosCloud>480 || xPosCloud<0){
       xSpeedCloud*=-1
       }
    if(yPosCloud>175 || yPosCloud <155){
       ySpeedCloud*=-1
       }
  
    image(img4, xPosCloud2, yPosCloud2)
    xPosCloud2+=xSpeedCloud2
    yPosCloud2+=ySpeedCloud2
    if (xPosCloud2>475 || xPosCloud2 <0){
       xSpeedCloud2*=-1
       }
    if(yPosCloud2>320 || yPosCloud2 <300){
       ySpeedCloud2*=-1
       }
//     making gold/fairy collision
    if (dist(xPosFairy, yPosFairy, 330, 30)<50){
       level1Completed = true
       background(0, 255, 0)
       textSize(500)
       text("2", 200, 400)
       }
// transition and changing speeds
    if (level1Completed == true) {
       transitionToNextLevel();
       xPosFairy=265;
       yPosFairy=475;
       xSpeedCloud=3;
       ySpeedCloud=1;
       xSpeedCloud2=3;
       ySpeedCloud2=1;
       }
//     Level 2
    }  else if (currentLevel === 2) {
      background(70, 116, 242)
      image(img3, 330, 30)
// redoing everything because of the new background color
    image(img5, 0, 0)
    if (dist(xPosFairy, yPosFairy, xPosCloud, yPosCloud)<50){
      background(255, 0, 0)
      textSize(300)
      text("X", 200, 300)
      xPosFairy=265
      yPosFairy=475
      }
  
    if (dist(xPosFairy, yPosFairy, xPosCloud2, yPosCloud2)<50){
      background(255, 0, 0)
      textSize(500)
      text("X", 200, 400)
      xPosFairy=265
      yPosFairy=475
      }
      
    image(img1, xPosFairy, yPosFairy);
    xPosFairy+= xSpeedFairy
    yPosFairy+= ySpeedFairy
  
    if(xPosFairy<0 || xPosFairy>475||yPosFairy<0||yPosFairy>525){
    xPosFairy=265
    yPosFairy=475
    }

    image(img2, xPosCloud, yPosCloud);
    xPosCloud+=xSpeedCloud
    yPosCloud+=ySpeedCloud
  
    if(xPosCloud>480 || xPosCloud<0){
     xSpeedCloud*=-1
     }
    if(yPosCloud>175 || yPosCloud <155){
     ySpeedCloud*=-1
     }
  
    image(img4, xPosCloud2, yPosCloud2)
    xPosCloud2+=xSpeedCloud2
    yPosCloud2+=ySpeedCloud2
 
    if (xPosCloud2>475 || xPosCloud2 <0){
      xSpeedCloud2*=-1
      }
    if(yPosCloud2>320 || yPosCloud2 <300){
      ySpeedCloud2*=-1
      }
      
    if (dist(xPosFairy, yPosFairy, 330, 30)<50){
      level2Completed = true
      }
//     level 3 screen
    if (level2Completed == true){
         background(0, 255, 0)
         textSize(500)
         text("3", 200, 400)
         }
//     transition
    if (level2Completed == true) {
       
      transitionToNextLevel();
    xPosFairy=265;
      yPosFairy=475;
      xSpeedCloud=4;
      ySpeedCloud=1;
      xSpeedCloud2=4;
      ySpeedCloud2=1;
      }
//       level3
   } else if(currentLevel === 3){
        background(50, 59, 161)
        image(img3, 330, 30)

    image(img5, 0, 0)
    if (dist(xPosFairy, yPosFairy, xPosCloud, yPosCloud)<50){
      background(255, 0, 0)
      textSize(300)
      text("X", 200, 300)
      xPosFairy=265
      yPosFairy=475
      }
  
    if (dist(xPosFairy, yPosFairy, xPosCloud2, yPosCloud2)<50){
      background(255, 0, 0)
      textSize(500)
      text("X", 200, 400)
      xPosFairy=265
      yPosFairy=475
      }
     
    image(img1, xPosFairy, yPosFairy);
    xPosFairy+= xSpeedFairy
    yPosFairy+= ySpeedFairy
  
    if(xPosFairy<0 || xPosFairy>475||yPosFairy<0||yPosFairy>525){
      xPosFairy=265
      yPosFairy=475
      }

    image(img2, xPosCloud, yPosCloud);
    xPosCloud+=xSpeedCloud
    yPosCloud+=ySpeedCloud
  
    if(xPosCloud>480 || xPosCloud<0){
     xSpeedCloud*=-1
     }
    if(yPosCloud>175 || yPosCloud <155){
     ySpeedCloud*=-1
     }
  
    image(img4, xPosCloud2, yPosCloud2)
    xPosCloud2+=xSpeedCloud2
    yPosCloud2+=ySpeedCloud2

    if (xPosCloud2>475 || xPosCloud2 <0){
      xSpeedCloud2*=-1
      }
    if(yPosCloud2>320 || yPosCloud2 <300){
      ySpeedCloud2*=-1
      }
  
    if (dist(xPosFairy, yPosFairy, 330, 30)<50){
      level3Completed = true
      }
    
    if (level3Completed == true){
      background(240, 153, 230)
      textSize(28);
      text("Game Over, You Win!", 170, 300)
      }
    }
    
}

function transitionToNextLevel() {
  if (currentLevel < 3) {
    currentLevel++;
    }
}

function keyPressed() {
  if(keyCode == UP_ARROW){
    xSpeedFairy=0
    ySpeedFairy=-1.7
  }
  if(keyCode == LEFT_ARROW){
    xSpeedFairy=-1.7
    ySpeedFairy=0
  }
  if(keyCode == RIGHT_ARROW){
    xSpeedFairy=1.7
    ySpeedFairy=0
  }
  if(keyCode == DOWN_ARROW){
    xSpeedFairy=0
    ySpeedFairy=1.7
  }

}


