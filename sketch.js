
let particles =[];
let attractors =[];
let colors =['red','blue'];

function setup () {
 createCanvas(windowWidth,windowHeight);
 background(0);
 for (let i=0; i<10; i++){
 let x=random(width);
 let y=random(height);
 let mass=random(1,2);
 let col=random (colors)
 let p=new Particles(x,y,mass,color(col));
  particles.push(p);
 }

 for (let i=0; i<5; i++) {
 let x=random(width);
 let y=random (height);
   attractors.push(new Attractors(x,y));

} }


 

function draw () {

 let x=random(width);
 let y=random(height);
 let mass=random(1,2);
 let p=new Particles(x,y,mass);
  particles.push(p);

 for (let i=particles.length-1;i>0;i--) { 
 particles[i].update();
 particles[i].show(i);

 if(particles[i].life ()) {
  particles.splice(i,1)

    }
for (let j=0;j<attractors.length;j++) { 
    
 attractors[j].gravity(particles[i]);
// attractors[j].show()  
    }
}
}




//   function mousePressed (){
  
//    let x=mouseX;
//    let y=mouseY;
//    attractors.push(new Attractors(x,y))
// }
