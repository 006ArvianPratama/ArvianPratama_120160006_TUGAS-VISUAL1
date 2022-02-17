let a = 70;
let b = 130;
let c = 55;
let d = 165;
let e = 145;

function setup() {
  // put setup code here
  createCanvas(400,200);
}

function draw() {
  // put drawing code here
  background(200);

  stroke(0);
  fill(255, 255, 0);
  rect(290, 70, 20, 60);
  stroke(0);
  fill(0);
  triangle(285, 70, 315, 70, 300, 55);
  stroke(0);
  fill(255, 153, 255);
  arc(300, 130, 20, 15, radians(0), radians(180) );
  line(200, 0, 200, 200);
  stroke(236, 68, 17);
  line(300, 165, 300, 145);
  line(290, 165, 295, 145);
  line(280, 165, 290, 145);
  line(310, 165, 305, 145);
  line(320, 165, 310, 145);


  a = a - 0.7;
  if(a<200 - 300) a=145;

  b = b - 0.7;
  if(b<200 - 300) b=145;

  c = c - 0.7;
  if(c<200 - 300) c=145;

  d = d - 0.7;
  if(d<200 - 300) d=145;

  e = e - 0.7;
  if(e<200 - 300) e=145;

  stroke(0);
  fill(255, 255, 0);
  rect(90, a, 20, 60);
  stroke(0);
  fill(0);
  triangle(85, a, 115, a, 100, c);
  stroke(0);
  fill(255, 153, 255);
  arc(100, b, 20, 15, radians(0), radians(180) );
  line(200, 0, 200, 200);
  stroke(236, 68, 17);
  line(100, d, 100, e);
  line(90, d, 95, e);
  line(80, d, 90, e);
  line(110, d, 105, e);
  line(120, d, 110, e);






  


}