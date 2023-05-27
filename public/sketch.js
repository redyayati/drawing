var socket ;

function setup() {
  createCanvas(800,800);
  print("Hello");
  background(50);
  socket = io.connect('http://localhost:3000')
  socket.on('mouse' , newDrawing);
}

function newDrawing(data){
  noStroke();
  fill(255,0,100);
  ellipse(data.x,data.y,20,20);
}

function mouseDragged(){
  noStroke();
  fill(255);
  ellipse(mouseX,mouseY,20,20);
  // console.log('sending : ' + mouseX + ',' + mouseY);
  var data = {
    x : mouseX,
    y : mouseY
  }
  socket.emit('mouse' , data);
}


function draw() {


  
}
