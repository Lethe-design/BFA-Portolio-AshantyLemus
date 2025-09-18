function setup() {
  createCanvas(400, 400);
  background(125,56,49);
  
  push();
  fill(107,114,104);
  strokeWeight(1);
  rect(0,150,400,100);
  fill(102,70,56);
  rect(0,50,400,100);
  fill(152,118,110);
  rect(0,0,400,50);
  fill(95,47,42);
  strokeWeight(0);
  ellipse(200,310,250,90);
  pop();
  
  push();
  line(10,15,150,15);
  line(30,30,85,30);
  line(10,180,75,180);
  line(0,170,55,170);
  line(300,100,350,100);
  line(300,130,320,130);
  line(320,220,360,220);
  line(340,235,400,235);
  pop();
  
  push(); //arms
  strokeWeight(0);
  fill(182,227,234);
  rect(82, 209, 70, 100, 350, 25, 1, 10);
  rect(82, 270, 20, 50, 1, 25, 1, 10);
  rect(248, 209, 70, 100, 25, 350, 10, 1);
  rect(298, 270, 20, 50, 1, 1, 10, 1);
  pop();
  
  push(); //left leg
  strokeWeight(0);
  fill(182,227,234);
  beginShape();
  vertex(135,362);
  vertex(200, 300);
  vertex(200,200);
  vertex(130,300)
  endShape(CLOSE);
  pop();

  push(); //right legs
  strokeWeight(0);
  fill(182,227,234);
  beginShape();
  vertex(270,362);
  vertex(210, 300);
  vertex(200,200);
  vertex(290,300)
  endShape(CLOSE);
  pop();
  
  push();
    fill(109,197,206); 
    strokeWeight(0)
    rect(110, 45, 180, 250, 20);
    quad(102.5, 70, 114, 52.5, 285.5, 52.5, 297.5, 70); //body shadow
  
    strokeWeight(0)
    fill(105,223,217);
    rect(100, 60, 200, 260, 20); //body
  pop();
  
  push();  
    strokeWeight(0)  
    fill(226,248,247)
    rect(120, 80, 160, 110, 20); //face
  pop();

  push();  
    strokeWeight(0)  
    fill(51, 211, 203)
    rect(120, 200, 100, 15, 5); //disk placer
  pop();

  push();  
    strokeWeight(0)  
    fill(12,7,137)
    circle(260, 207, 14); //black dot
  pop();
  
  push();  
    strokeWeight(0)  
    fill(255,24,24)
    circle(245, 280, 30); //red dot
  pop();
  
  push();  
    strokeWeight(0)  
    fill(165,255,185)
    circle(264, 250, 20); //green dot
  pop();
  
  push();  
    strokeWeight(0)  
    fill(135,236,255)
    triangle(223, 240, 210, 260, 235, 260); //blue triangle
  pop();
  
  push();  
    strokeWeight(0)  
    fill(12,7,137)
    rect(120, 295, 30, 10, 4);
    rect(160, 295, 30, 10, 4); //two black buttons
  pop();
  
  push();  
    strokeWeight(0)  
    fill(1, 1, 1)
    ellipse(150, 115, 12, 15);
    ellipse(250, 115, 12, 15); //eyes
  pop();
  
  push();
    strokeWeight(0)
    fill(245,216,76)
    rect(122, 250, 49, 14, 2);
    rect(139, 233, 15, 47, 2); //yellow cross
  pop();
  
  push();  
    strokeWeight(0)  
    fill(194, 234, 240)
    rect(115, 313, 30, 50, 15);
    rect(260, 313, 30, 50, 15); //feets
  pop();

  push(); //mouth
  noFill()
  arc(200, 125, 30, 30, 0.63, 2.5);
  pop();

}