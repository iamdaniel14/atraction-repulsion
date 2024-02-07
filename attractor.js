class Attractors{
    constructor(x,y){
     this.pos=createVector(x,y);
     this.mass=100;
     this.r=sqrt(this.mass)*4;

    }

  show (){

  fill(' blue');
  circle (this.pos.x,this.pos.y,this.r*2);

    }



gravity(p){
  let force =p5.Vector.sub(this.pos,p.pos);
  let dSqr=force.magSq();
  let d =force.mag()
  dSqr=constrain(dSqr,0.1,100);
  let gravity=1;
  let strength=gravity*(this.mass*p.mass)/dSqr;
  force.setMag(strength);

 
    p.applyForce(force);
  
   
  }


}