
let particles =[];
let attractors =[];

function setup () {
 createCanvas(windowWidth,windowHeight);
 
 for (let i=0; i<100; i++){
 let x=random(width);
 let y=random(width);
 let mass=random(1,2);
 let p=new Particles(x,y,mass);
 particles.push(p);
 }
}

function draw () {
background(0)
   for (let i=0;i<particles.length;i++) { 
    particles[i].update();
    particles[i].show(i);
    for (let j=0;j<particles.length;j++) { 
    if ( particles[i] !== particles[j] ) {
 particles[i].gravity( particles[j],i)
        }
    
   
    }


}
}
