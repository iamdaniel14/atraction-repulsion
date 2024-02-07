class Particles{
 constructor(x,y,m) {
this.pos =createVector (x,y);
this.vel=createVector(0,0);
this.acc=createVector(0,0);
this.mass =m;
this.maxSpeed=4;
this.r=sqrt(this.mass)*10;
this.col='red';
this.col1='white';

    }

 applyForce (force) {
let f=p5.Vector.div(force,this.mass);
this.acc.add(f);
    }

show (i){
push ();
noStroke();

if (i%2==1){ 
   fill (this.col1)
} else if (i%2==0) {
    fill (this.col)
}
circle (this.pos.x, this.pos.y,this.r*2);
pop () ;

}

gravity(attractor,i,j){
let force =p5.Vector.sub(attractor.pos,this.pos);
let dSqr=force.magSq();

let d =force.mag()
dSqr=constrain(dSqr,0.1,200);
let gravity=4;
let strength=gravity*(this.mass*attractor.mass)/dSqr;
force.setMag(strength);

if (i%1==0) { 
force.mult(-1);
}
this.applyForce(force);
 



}

update () {
this.vel.add(this.acc);
this.vel.limit (this.maxSpeed);
this.pos.add (this.vel);
this.acc.set(0);
this.edges();
}
edges (){
if(this.pos.x>width-this.r ||this.pos.x<this.r){
    this.vel.x*=-1;
} else if
(this.pos.y>height-this.r ||this.pos.y<this.r){
this.vel.y*=-1;
    }

}
}

