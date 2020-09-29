function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight)
  // put setup code here
  background('black');
  angleMode(DEGREES);
}

function draw() {
  // put drawing code here
  noFill();

  push();
  stroke(lerpColor(color('magenta'),color('red'), frameCount/360));
  translate(width/2,height/2);
  rotate(frameCount*3);
  translate(20,20);
  rotate(frameCount*5)
  scale(.5,.5,1)
  ellipse(30,30,3,40)
  pop();


  push();
  stroke(lerpColor(color('red'),color('yellow'), frameCount/360));
  translate(width/2,height/2);
  rotate(frameCount*3);
  translate(200,0);
  rotate(frameCount*7)
  ellipse(0,0,20, 200)
  pop();



  push();
  stroke(lerpColor(color('orange'),color('green'), frameCount/360));
  translate(width/2,height/2);
  rotate(frameCount);
  translate(-300,140);
  rotate(frameCount*9);
  ellipse(30,-30,10, 10)
  pop();




  push();
  stroke(lerpColor(color('yellow'),color('green'), frameCount/360));
  translate(width/2,height/2);
  rotate(-frameCount);
  translate(-370,140);
  rotate(-frameCount*9)
  ellipse(20,0,10, 10)
  pop();

  push();
  stroke(lerpColor(color('violet'),color('cyan'), frameCount/360));
  translate(width/2,height/2);
  rotate(-frameCount);
  translate(400,0);
  rotate(-frameCount*9)
  scale(2,1,1)
  ellipse(20,0,10, 10)
  pop();

  push();
  stroke(lerpColor(color('cyan'),color('blue'), frameCount/360));
  translate(width/2,height/2);
  rotate(frameCount);
  translate(-430,150);
  rotate(frameCount*9)
  scale(1,2,1)
  ellipse(20,0,15, 15)
  pop();

  push();
  stroke(lerpColor(color('indigo'),color('purple'), frameCount/360));
  translate(width/2,height/2);
  rotate(frameCount);
  translate(430,0);
  scale(2,1,1)
  rotate(frameCount*9)
  ellipse(20,0,15, 15)
  pop();





  if(frameCount == 360){
  noLoop();

 }


}
