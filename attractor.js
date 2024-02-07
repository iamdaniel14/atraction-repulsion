class Attractors{
    constructor(x,y){
     this.pos=createVector(x,y);
     this.mass=8;
     this.r=sqrt(this.mass)*4;

    }

    show (){
  noStroke();
  fill('blue');
  circle (this.pos.x,this.pos.y,this.r*2);

    }
}