var Slingshot,tree,ground,Stone,boy;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	boy=loadImage("Plucking mangoes/boy.png");
	
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	tree=new Tree(1050,350,700);
	Stone=new stone(230,400,60,60);
	ground=new Ground(650,690,1300,20);
	mango1=new mango(1100,100,50,50);
	mango2=new mango(1070,230,50,50);
	mango3=new mango(1010,270,50,50);
	mango4=new mango(1050,70,50,50);
	mango5=new mango(1100,230,50,50);
	mango6=new mango(930,150,50,50);
	mango7=new mango(1200,200,50,50);
	mango8=new mango(1130,145,50,50);
	mango9=new mango(1045,180,50,50);
	mango10=new mango(1090,160,50,50);
	Slingshot=new SlingShot(Stone.body,{x:300,y:470});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  strokeWeight(4);
  tree.display();
	ground.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
	mango10.display();
	image(boy,250,350,250,450);
	Stone.display();
	Slingshot.display();

detectCollision(Stone,mango1);
detectCollision(Stone,mango2);
detectCollision(Stone,mango3);
detectCollision(Stone,mango4);
detectCollision(Stone,mango5);
detectCollision(Stone,mango6);
detectCollision(Stone,mango7);
detectCollision(Stone,mango8);
detectCollision(Stone,mango9);
detectCollision(Stone,mango10);


  drawSprites();
 
}
function mouseDragged(){
    
        Matter.Body.setPosition(Stone.body, {x: mouseX , y: mouseY});    
    
    
    
}


function mouseReleased(){
    Slingshot.fly();
    
}


function detectCollision(lstone,lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)

if(distance<=lmango.width+lstone.width){
Matter.Body.setStatic(lmango.body,false);
}
}



