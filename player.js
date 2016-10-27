function Player(posicionX,posicionY,anchura,altura,vel) {
	
  this.posX = posicionX;
  this.posY = posicionY;
  this.Width = anchura;
  this.Height = altura;
  this.velocidad = vel
  this.direccion = "abajo";
  this.dibujar = function() {
    stroke(255);
    fill(0,255,0);
    rect(this.posX,this.posY,this.Width,this.Height);
  }
  this.mover = function() {
    
    if(downPulsada && leftPulsada){
      this.posX -= this.velocidad;
      this.direccion = "izquierda";
    }
    else if(upPulsada && leftPulsada){
      this.posX -= this.velocidad;
      this.direccion = "izquierda";
    }
    else if(downPulsada && leftPulsada){
      this.posX += this.velocidad;
      this.direccion = "derecha";
    }   
    else if(upPulsada && rightPulsada){
      this.posX += this.velocidad;
      this.direccion = "derecha";
    } 
     else if (rightPulsada === true || leftPulsada === true && upPulsada === false && downPulsada === false) {  //comprobar si se mueve horizontalmente
       
       if (rightPulsada === true && leftPulsada === false)  { //comprobar en que dirección horizontal se mueve
        this.posX += this.velocidad;
        this.direccion = "derecha";
       }
       else if (rightPulsada === false && leftPulsada === true){
        this.posX -= this.velocidad;
        this.direccion = "izquierda";
      }
    }
     else if(upPulsada === true || downPulsada === true && rightPulsada === false && leftPulsada === false){
      
      if(upPulsada === true && downPulsada === false){
       this.posY -= this.velocidad;
       this.direccion = "arriba";
     }
      else if (upPulsada === false && downPulsada === true){
       this.posY += this.velocidad;
       this.direccion = "abajo";
     }
    }   
  }
}
