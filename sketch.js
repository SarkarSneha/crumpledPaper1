
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	
	line1=createSprite(1000,400,2005,10);
	line1.shapeColor=color("lightgreen")


	paper = new Paper(100,378,30)
	dustbin=new Dustbin(720,390,100,10)

	ground=Bodies.rectangle(width/2,400,width,10,{isStatic:true});
	
World.add(world,ground);

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
  background(0);
  paper.display();
  dustbin.display();
  drawSprites();
}

function keyPressed(){
	if (keyCode===UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:125,y:-180});
}
}



