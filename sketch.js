
var player = new Player(50,50,32,32,4);


var upPulsada = false;
var downPulsada = false;
var rightPulsada = false;
var leftPulsada = false;
function setup() {

createCanvas(550,450);
frameRate(30);
}

function draw() {
    background(255);
debug();
player.dibujar();
player.mover();

}










function keyPressed(){
  switch(keyCode){
    case RIGHT_ARROW: rightPulsada = true; break;
    case LEFT_ARROW: leftPulsada = true; break;
    case UP_ARROW: upPulsada = true; break;
    case DOWN_ARROW: downPulsada = true; break;
    
    
  }
  return false
}

function keyReleased(){
  switch(keyCode){
    case RIGHT_ARROW: rightPulsada = false; break;
    case LEFT_ARROW: leftPulsada = false; break;
    case UP_ARROW: upPulsada = false; break;
    case DOWN_ARROW: downPulsada = false; break;
    
}
return false
}
function debug(){
  window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);
}
