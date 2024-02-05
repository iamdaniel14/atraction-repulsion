
let particles =[];
let attractors =[];

function setup () {
 createCanvas(windowWidth,windowHeight);
 


    let x=random(width);
    let y=random(width);
    p1=new Attractors (width*0.2,height*0.5)
    p2=new Attractors (width*0.7,height*0.5)
    attractors.push(p1);
    attractors.push(p2);
 


 for (let i=0; i<20; i++){
 let x=random(width);
 let y=random(width);
 let mass=random(1,10);
 let p=new Particles(x,y,mass);
 particles.push(p);
 }
}

function draw () {
    background(0)

    
   



    for (let p of particles){
    for (let b of particles) { 
        if (p !==b ) {

            p.gravity(b)
        }
    
     p.update();
     p.show();
   
    }


}
}
