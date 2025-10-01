let state = 0

let img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12;

//let pets = [img2, img3, img4, img5];

//Randomizer Box Parameters
let x1 = 160;
let y1 = 275;
let w1 = 150;
let h1 = 75;

//Guide Box Parameters
let x2 = 435;
let y2 = 7;
let w2 = 50;
let h2 = 50;

//Environment Box Parameters
let x3 = 50;
let y3 = 350;
let w3 = 150;
let h3 = 75;

//Food Box Parameters
let x4 = 300;
let y4 = 350;
let w4 = 150;
let h4 = 75;

//Back to Menu Parameters
let x5 = 25;
let y5 = 25;
let w5 = 50;
let h5 = 50;

function preload() {
  img1 = loadImage("mouse.png");
  //Virtual Pets
  img2 = loadImage("mohcoh.png");
  img3 = loadImage("nyeow.png");
  img4 = loadImage("gobbo.png");
  img5 = loadImage("tulip.png");
  img6 = loadImage("rendomititle.png");
  //Buttons
  img7 = loadImage("helpbutton.png");
  img12 = loadImage("playbutton.png");
  //Environments
  img8 = loadImage("valley.png");
  img9 = loadImage("forest.png");
  img10 = loadImage("casino.png");
  img11 = loadImage("office.png");
  
  
  //Array of Pets
  pets = ["mohcoh.png", "nyeow.png", "gobbo.png", "tulip.png"];
  //Code Picks Random Pet Per Interaction
  var pos = floor(random(pets.length));
  ranpet = loadImage(pets[pos]);
  
  //Array of Environments
  environments = ["valley.png", "forest.png", "casino.png", "office.png"];
  //Click for Random Environment
  var pas = floor(random(environments.length));
  ranment = loadImage(environments[pas]);
}
function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  fill(255);
  text("PRESS ENTER TO START", 125, 225, 200);
  noCursor();
}

function draw() {
  
  if (keyIsPressed == true && keyCode == 13) {
    state = 1;
  }
  if (state == 1) {
    //Main Menu
    draw1();
  } else if (state == 2) {
    //Randomizer
    draw2();
  } else if (state == 3) {
    //Guide
    draw3();
  }
}

function draw1() {
  bGD();
  background(img6);
  //text("MENU", 100, 100, 100, 100);
  
  bRDM();
  
  //bGD();
  
  image(img7, 0, -2.5);
  
  image(img12, 0, -30);
  
  if (mouseIsPressed == true && (mouseX > x1) && (mouseX < x1 + w1) && (mouseY > y1) && (mouseY < y1 + h1)){
    state = 2;
  }
  
  if (mouseIsPressed == true && (mouseX > x2) && (mouseX < x2 + w2) && (mouseY > y2) && (mouseY < y2 + h2)){
    state = 3;
  }
  
  cursorSP();
}

function draw2() {
  bGD();
  
  background(175);
  //text("RANDOMIZER", 100, 100, 100, 100);
  
  // bGD();
  
  bBM();
  
  bEV();
  
  bFD();
  
  image(ranpet, 0, -30);
  
  image(img7, 0, -2.5);
  
  
  
  if (mouseIsPressed == true && (mouseX > x2) && (mouseX < x2 + w2) && (mouseY > y2) && (mouseY < y2 + h2)){
    state = 3;
  }
  
  if (mouseIsPressed == true && (mouseX > x5) && (mouseX < x5 + w5) && (mouseY > y5) && (mouseY < y5 + h5)){
    state = 1;
  }
  
  // if (mouseIsPressed == true && (mouseX > x3) && (mouseX < x3 + w3) && (mouseY > y3) && (mouseY < y3 + h3)){
  //   background(image(ranment, 0, 0));
  // }
  
  cursorSP();
}

function draw3() {
  background(200);
  
  text("GUIDE", 100, 100, 100, 100);
  
  bRDM();
  
  bBM();
  
  image(img12, 0, -30);
  
  if (mouseIsPressed == true && (mouseX > x1) && (mouseX < x1 + w1) && (mouseY > y1) && (mouseY < y1 + h1)){
    state = 2;
  }
  
  if (mouseIsPressed == true && (mouseX > x5) && (mouseX < x5 + w5) && (mouseY > y5) && (mouseY < y5 + h5)){
    state = 1;
  }
  
  cursorSP();
}

function cursorSP() {
    image(img1, mouseX, mouseY, 400, 400);
}

function bRDM() {
  fill(250);
  rect(x1, y1, w1, h1);
}

function bGD() {
  fill(250);
  rect(x2, y2, w2, h2);
}

function bEV() {
  fill(250);
  rect(x3, y3, w3, h3);
}

function bFD() {
  fill(250);
  rect(x4, y4, w4, h4);
}

function bBM() {
  fill(250);
  rect(x5, y5, w5, h5);
}