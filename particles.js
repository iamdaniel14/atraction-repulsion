class Particles{
 constructor(x,y,m) {
this.pos =createVector (x,y);
this.vel=createVector (0,0)
this.acc=createVector(0,0);
this.mass =m;
this.r=sqrt(this.mass)*10;

    }

 applyForce (force) {
let f=p5.Vector.div(force,this.mass);
this.acc.add(f);
    }

show (){
push ()
fill('white');
circle (this.pos.x, this.pos.y,this.r*2);
pop () 

}

gravity(attractor){
let force =p5.Vector.sub(attractor.pos,this.pos);
let dSqr=force*force;
dSqr=constrain(dSqr,0,200);
force.normalize();
let gravity=1;
let strength=gravity*(this.mass*attractor.mass)/dSqr;
force.setMag(strength);
this.applyForce(force);


}

update () {
this.vel.add(this.acc);
this.vel.limit (1);
this.pos.add (this.vel);
this.acc.set(0)
}

}