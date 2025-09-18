function setup() {
  createCanvas(400, 400);
  background(188,243,244);

}

  function draw() {
    background(188,243,244)
    let rand;
for (let i = 0; i < 400; i += 20) {
for (let j = 0; j < 400; j += 20) {
  rand = random(90, 255);  // Bright blue shades
  fill(0, 0, rand);         // RGB with blue varying
  rect(i + 5, j + 5, 10, 10);
  
  strokeWeight(0); //ground
  fill(255,255,255)
  rect(0, 300, 400, 120);
  
  push();//House
  strokeWeight(1);
  fill(252,41,41);
  rect(150, 230, 100, 100);
  pop();
  
  push();//top house
  strokeWeight(1);
  fill(252,41,41);
  quad(125, 255, 275, 255, 269, 260, 129, 260);
  quad(140, 180, 255, 180, 275, 255, 125, 255);
  pop();
  
  push(); //line on House
  strokeWeight(1);
  line(152, 305, 248, 305);
  line(152, 280, 248, 280);
  line(133, 235, 266, 235);
  line(138, 210, 259, 210);
  pop();
  
  push(); //nose
  strokeWeight(0);
  fill(0,0,0);
  ellipse(166, 121, 8, 8, 0);
  ellipse(165, 205, 8, 50, 0);
  fill(255,255,255);
  ellipse(165, 120, 4, 4, 0);
  pop();
  
  push(); // body
  strokeWeight(0);
  fill(255,255,255);
  rect(141, 160, 35, 30, 20, 20, 20, 20 );
  rect(150, 125, 35, 65, 15, 20, 5, 20 );
  rect(182, 165, 40, 25, 20, 20, 0, 5 );
  rect(220, 175, 30, 15, 0, 0, 0, 0 );
  rect(235, 140, 15, 35, 20, 20, 0, 0 );
  ellipse(240, 160, 20, 35, 0);
  ellipse(205, 189, 3, 10, 0);
  ellipse(210, 189, 5, 10, 0);
  ellipse(215, 188, 3, 10, 0);
  pop();
  
  beginShape();
  fill(255,255,255);
    vertex(183,183);
    bezierVertex(195,148,mouseX,mouseY,225,183); // cP2 between 
  endShape(CLOSE);
  
  push();
  strokeWeight(2);
  line(187, 167, 187, 192);
  pop();
  
  push();
  strokeWeight (1);
  noFill();
  arc(160, 160, 10, 13, 1.57, 2.98);
  arc(249, 155, 10, 13, 3.14, 4.71);
  arc(245, 149, 8, 8, 3.14, 4.71);
  arc(205, 190, 3, 8, 0.00, 3.14);
  arc(210, 190, 5, 8, 0.00, 3.14);
  arc(215, 189, 3, 8, 0.00, 3.14);
  line(195, 178, 212, 178);
  line(216, 190, 216, 182);
  arc(212, 182, 7, 8, 4.71, 0.00);
  pop();

  //b = loadImage("Snoopy.PNG");

  //image(b, 100, 100, 150, 150);

  
  
    if (mouseIsPressed) {
      // First shape: Large rectangle in a new position (near his nose)
      if (mouseX > 100 && mouseX < 150) {
        if (mouseY > 100 && mouseY < 150) {
          fill(0, 0, 255, 90);
          rect(120, 120, 60, 40);
        }
      }
  
      // Second shape: Small ellipse in a different position (on top of snoopy face)
      if (mouseX > 150 && mouseX < 200) {
        if (mouseY > 150 && mouseY < 200) {
          fill(0, 255, 0,90);
          ellipse(170, 170, 30, 30);
        }
      }
  
      // Third shape: Triangle moved to a different section (at the end of the canvas)
      if (mouseX > 300 && mouseX < 380) {
        if (mouseY > 250 && mouseY < 350) { 
          fill(255, 165, 0,90);
          triangle(320, 270, 350, 220, 380, 270);
        }
      }
  
      // Fourth shape: Another triangle in a different area (on the house)
      if (mouseX > 200 && mouseX < 300) {
        if (mouseY > 200 && mouseY < 300) {
          fill(70,197,174,90);
          triangle(200, 240, 240, 180, 270, 240);
        }
      }
  
      // Fifth shape: A circle appearing in the top-left quadrant (on top of the #)
      if (mouseX > 50 && mouseX < 100) {
        if (mouseY > 50 && mouseY < 100) {
          fill(150, 50, 250, 90);
          ellipse(75, 75, 40, 40);
  
        }
      }
    }
  }
}
}
