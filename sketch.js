const MAX_ITER = 10;
let maxDisplace = 20;

let remakeBtn, saveBtn, slider, canvas;

var gl_dots = [];

function setup() {
  canvas = createCanvas(400, 400);
  slider = createSlider(0, 100);
  
  remakeBtn = createButton('Remake!');
  remakeBtn.mousePressed(remakePressed);
  
  saveBtn = createButton('Save to a file');
  saveBtn.mousePressed(savePressed);
}

function plasma(dots, iter, maxDisplace){
  if(iter >= MAX_ITER) return;
  
  let newdots = [];
  for(let i = 0; i < 4; i++){
    newdots.push(dots[i].aver(dots[(i+1)%4]));
  }
  newdots.push(dots[0].aver(dots[2]));
  newdots[4].displace(maxDisplace);
  
  for(let dot of newdots){
    gl_dots.push(dot);
  }
  
  iter++;
  
  plasma([dots[0], newdots[0], newdots[4], newdots[3]], iter, maxDisplace);
  plasma([newdots[0], dots[1], newdots[1], newdots[4]], iter, maxDisplace);
  plasma([newdots[4], newdots[1], dots[2], newdots[2]], iter, maxDisplace);
  plasma([newdots[3], newdots[4], newdots[2], dots[3]], iter, maxDisplace);
}

function generateDots(){
  return [
    new dot(0, 0, new myCol(random(256), random(256), random(256))),
    new dot(width, 0, new myCol(random(256), random(256), random(256))),
    new dot(width, height, new myCol(random(256), random(256), random(256))),
    new dot(0, height, new myCol(random(256), random(256), random(256)))
  ];
}

function remakePressed(){
  gl_dots = [];
  let myDots = generateDots();
  let displace = slider.value();
  plasma(myDots, 0, displace);
  for(let dot of gl_dots) dot.show();
  updatePixels();
}

function savePressed(){
  save(canvas, 'fractal.png');
}

function draw() {
  background(220);
  
  noLoop();
}