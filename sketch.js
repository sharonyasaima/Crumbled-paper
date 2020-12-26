const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var paperball,dustside1,dustside2,dustside3,ground1;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here
  ground1=new Ground(width/2,490,width,20);
	paperball=new paper(30,480,60);
	dustbin=new Dustbinwall(155,45,180,180);




	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  
  background("pink");
 
   paperball.display();
   dustbin.display();
   ground1.display();

   


   drawSprites();
 
 }
 function keyPressed(){
   if(keyCode===UP_ARROW){
     Matter.Body.applyForce(paperball.body,paperball.body.position,{x:170,y:-170})
   }
 }
 
 
