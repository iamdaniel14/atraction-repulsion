
let particles =[];
let attractors =[];

function setup () {
 createCanvas(windowWidth,windowHeight);
 



 for (let i=0; i<20; i++){
 let x=random(width);
 let y=random(width);
 let mass=random(1,9);
 let p=new Particles(x,y,mass);
 particles.push(p);
 }
}

function draw () {
    background(0)

    
   



    for (let p of particles){
        
     p.update();
     p.show();
    for (let b of particles) { 
        if (p !==b ) {

            p.gravity(b)
        }
    
   
    }


}
}
