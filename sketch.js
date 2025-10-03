let state = 0

let img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14;

let bg1, bg2, bg3, bg4;

let f0, f1, f2;

let food = [];


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
let y5 = 10;
let w5 = 50;
let h5 = 50;

let foodCount = 50;

let position;

let env_id;

function preload() {
  //Cursor
  img1 = loadImage("mouse.png");
  //Virtual Pets
  img2 = loadImage("mohcoh.png");
  img3 = loadImage("nyeow.png");
  img4 = loadImage("gobbo.png");
  img5 = loadImage("tulip.png");
  img6 = loadImage("rendomititle.png");
  img12 = loadImage("guidemenu.png");
  img13 = loadImage("signature.png");
  img14 = loadImage("chikywawa.png");
  //Buttons
  img7 = loadImage("helpbutton.png");
  img8 = loadImage("playbutton.png");
  img9 = loadImage("backbutton.png");
  img10 = loadImage("environmentbutton.png");
  img11 = loadImage("foodbutton.png");
  //Environments
  bg1 = loadImage("valley.png");
  bg2 = loadImage("forest.png");
  bg3 = loadImage("casino.png");
  bg4 = loadImage("office.png");
  
  f0 = loadImage("food0.png");
  f1 = loadImage("food1.png");
  f2 = loadImage("food2.png");
  
  
  //Array of Pets
  pets = ["mohcoh.png", "nyeow.png", "gobbo.png", "tulip.png", "chikywawa.png"];
  //Code Picks Random Pet Per Interaction
  var pos = floor(random(pets.length));
  ranpet = loadImage(pets[pos]);
  
}
function setup() {
  createCanvas(500, 500);
  background(0);
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
  
  image(img8, 0, -30);
  
  image (img13, 0, 0);
  
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
  
  bBM();
  
  bEV();
  
  bFD();
  
  background(bg1);
  
  bmix();
  
  image(ranpet, 0, -30);
  
  image(img7, 0, -2.5);
  
  image(img9, 10, 0);
  
  image(img10, 0, -10);
  
  image(img11, 0, -10);
  
  
  
  if (mouseIsPressed == true && (mouseX > x2) && (mouseX < x2 + w2) && (mouseY > y2) && (mouseY < y2 + h2)){
    state = 3;
  }
  
  if (mouseIsPressed == true && (mouseX > x5) && (mouseX < x5 + w5) && (mouseY > y5) && (mouseY < y5 + h5)){
    state = 1;
  }
  
  cursorSP();
}

function draw3() {
  bBM();
  
  bRDM();
  
  background(img12);
  
  //bBM();
  
  image(img8, 0, -10);
  
  image(img9, 10, 0);
  
  if (mouseIsPressed == true && (mouseX > x1) && (mouseX < x1 + w1) && (mouseY > y1) && (mouseY < y1 + h1)){
    state = 2;
  }
  
  if (mouseIsPressed == true && (mouseX > x5) && (mouseX < x5 + w5) && (mouseY > y5) && (mouseY < y5 + h5)){
    state = 1;
  }
  
  cursorSP();
}

//Game Cursor
function cursorSP() {
    image(img1, mouseX, mouseY, 400, 400);
}

//Randomizer Play Button
function bRDM() {
  fill(250);
  rect(x1, y1, w1, h1);
}

//Guide Button
function bGD() {
  fill(250);
  rect(x2, y2, w2, h2);
}

//Environment Button
function bEV() {
  fill(250);
  rect(x3, y3, w3, h3);
}

//Food Button
function bFD() {
  fill(250);
  rect(x4, y4, w4, h4);
}

//Back to Menu Button
function bBM() {
  fill(250);
  rect(x5, y5, w5, h5);
}

//Primary Shuffle for Backgrounds in Randomizer
function bmix() {
  if (env_id == 1) {
    image(bg1, 0, 0, 500, 500);
  } else if (env_id == 2) {
    image(bg2, 0, 0, 500, 500);
  } else if (env_id == 3) {
    image(bg3, 0, 0, 500, 500);
  } else if (env_id == 4) {
    image(bg4, 0, 0, 500, 500);
  }
}

//Allows new background when mouse is released
function mouseReleased() {
  if (mouseX > x3 && mouseX < x3 + w3 && mouseY > y3 && mouseY < y3 + h3){
    shuffleBground();
  }
}

//Shuffle
function shuffleBground() {
  env_id = int(random(1, 5));
}