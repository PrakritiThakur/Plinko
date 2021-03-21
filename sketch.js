
const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var gameState = "PLAY";
var particle;
var ground;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(width/2, height, width, 20);
      
}
function draw() {

  background("black");
  ground.display();
  
  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }


   for (var j = 75; j <=width; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,75));
   }

   for (var j = 50; j <=width-10; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,175));
   }

    for (var j = 75; j <=width; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,275));
   }

    for (var j = 50; j <=width-10; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,375));
   }

  textSize(20);
  if(gameState != "end"){
    textSize(20);
    fill("white");

  }
  else{
    textSize(60);
    fill("red")
    text("GAME OVER",200,250);
   
  }
 
  Engine.update(engine);
 
 
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   for (var i = 0; i < particles.length; i++) {
    particles[i].display();
  }
 
   mousePressed();
}

function mousePressed(){
   
    particles.push(new Particle(mouseX,5,10));
    
}