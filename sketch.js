
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var roof;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(200,50,350,20);
	bob1= new Bob(100,500,25)
	rope1= new Rope(bob1.body, {x:100, y:50});

	bob2= new Bob(150,500,25);
	rope2= new Rope(bob2.body, {x:150, y:50});

	bob3= new Bob(200,500,25);
	rope3= new Rope(bob3.body, {x:200, y:50});
	
	bob4= new Bob(250,500,25);
	rope4= new Rope(bob4.body, {x:250, y:50});

	bob5= new Bob(300,500,25);
	rope5= new Rope(bob5.body, {x:300, y:50});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  roof.display();

  bob1.display()
  rope1.display();

  bob2.display();
  rope2.display();

  bob3.display();
  rope3.display();
 
  bob4.display();
  rope4.display();

  bob5.display();
  rope5.display();
}



