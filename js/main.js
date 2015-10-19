function setup() {
    //create the Canvas
    createCanvas(windowWidth, windowHeight);
    drawWindow();//call the function

    //http://www.colors.commutercreative.com/grid/
    var x = 0;
    var y = 0;
    var gridWidth = width-100;
    for(var i=0; i<100; i++){
    //increment our x
    x += 120;//same as x= x+120
    drawWindow(x,y);
    //check if x is past the grid width
    if(x >gridWidth){
        //set the x back to the beinning
        x =0;
        //move y down
        y += 270;
    }//end if
    }//end loop
}//end setup


  function draw(){
  }
  function drawWindow(startX,startY){
  strokeWeight(5);
  stroke('LavenderBlush');
  fill('LightPink');
  rect(startX,startY,100,200);
  }











//function setup() {
//    //create the Canvas
//    createCanvas(windowWidth, windowHeight);
//    drawWindow(50,200,'LightPink');//call the function
//    drawWindow(180,200,'PowderBlue');//call the function
//    drawWindow(50,420,'LightPink');//call the function
//    drawWindow(180,420,'LightPink');//call the function
//    //http://www.colors.commutercreative.com/grid/
//    for(var i=0; i<100; i++){
//    console.log(i);
//    //drawWindow(50*i,50);
//    }
//}
//
//  function draw(){
//  }
//  function drawWindow(startX,startY,winColor){
//  strokeWeight(5);
//  stroke('LavenderBlush');
//  fill(winColor);
//  rect(startX,startY,100,200);
//  }
//
//  strokeWeight(5);
//  fill('PowderBlue');
//  rect(startX,startY,100,200);
//
//  strokeWeight(5);
//  fill('LightPink');
//  rect(startX,startY,100,200);
//
//  strokeWeight(5);
//  fill('PowderBlue');
//  rect(startX,startY,100,200);






