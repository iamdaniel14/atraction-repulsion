class Attractors{
    constructor(x,y){
     this.pos=createVector(x,y);
     this.mass=10;
     this.r=sqrt(this.mass)*10;

    }

    show (){
  noStroke();
  fill('red');
  circle (this.pos.x,this.pos.y,this.r*2);

    }
}