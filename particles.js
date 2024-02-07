class Particles{
 constructor(x,y,m,col) {
this.pos =createVector (x,y);
this.vel=p5.Vector.random2D();
this.acc=createVector(0,0);
this.mass =m;
this.maxSpeed=2;
this.r=sqrt(this.mass)*2;
this.lifeSpan =255;
this.col=col;
this.prevpos=this.pos.copy();//

    }

 applyForce (force) {
let f=p5.Vector.div(force,this.mass);
this.acc.add(f);
    }


updatePrev() {

    this.prevpos.x=this.pos.x;
    this.prevpos.y=this.pos.y;
}

 


update () {
this.vel.add(this.acc);
this.vel.limit (this.maxSpeed);
this.pos.add (this.vel);
this.acc.set(0);
this.lifeSpan-=1;
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

life () {
if (this.lifeSpan==0) {
return true;
}
}

show(){
    push ();
   strokeWeight(0.4)
     stroke (255,this.lifeSpan,100);
    line(this.pos.x,this.pos.y,this.prevpos.x,this.prevpos.y);
    this.updatePrev();
    pop () ;
    
    }





}

