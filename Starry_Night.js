var img1, img2;
var mode=1;

function preload() {
  img1 = loadImage("img1.jpg");
  img2 = loadImage("img2.jpg");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  if (mouseX<width/2) {
    tint(255-mouseX*0.4);
    if (mode==1) {
      image(img1, 0, 0);
    }
    if (mode==-1) {
      image(img2, 0, 0);
    }
  } else {
    tint(mouseX-width/2*1.3);
    if (mode==1) {
      image(img2, 0, 0);
    }
    if (mode==-1) {
      image(img1, 0, 0);
    }
  }
}

function keyPressed() {
  mode *= -1;
}
