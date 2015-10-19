function setup() {
    //create the Canvas
    createCanvas(windowWidth, windowHeight);
    drawWindow(50,200,'LightPink');//call the function
    drawWindow(160,200,'PowderBlue');//call the function
    drawWindow(50,410,'PowderBlue');//call the function
    drawWindow(160,410,'LightPink');//call the function
    //http://www.colors.commutercreative.com/grid/



    strokeWeight(5);
  stroke('peru');
    line(50,200,260,200);
    line(50,200,50,200);
}



  function drawWindow(startX,startY,winColor){
  strokeWeight(0);
  stroke('LavenderBlush');
  fill(winColor);
  rect(startX,startY,100,200);

  strokeWeight(0);
  fill(winColor);
  rect(startX,startY,100,200);

  strokeWeight(0);
  fill(winColor);
  rect(startX,startY,100,200);

  strokeWeight(0);
  fill(winColor);
  rect(startX,startY,100,200);
  }
