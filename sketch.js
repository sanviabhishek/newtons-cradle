
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4;
var bobDiameter;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground= new Roof(371,200,260,20);
	bob1=new Bob(280,500,60,60);
	bob2=new Bob(340,500,60,60);
	bob3=new Bob(400,500,60,60);
	bob4=new Bob(460,500,60,60);
	rope1=new Rope(bob1.body,ground.body,-bobDiameter*2,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ground.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  rope1.display();
}



