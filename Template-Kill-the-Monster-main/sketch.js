const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
//preload the images here
backgroundImg = loadImage("images/b.jpg");
}

function setup() {
  createCanvas(2000, 400);

    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,2000,20);
    superman1 = new superman(200,50);
    monster1 = new monster(1000,250,500,500);
    box1 = new Box(920,90,70,70);
    box2 = new Box(920,90,70,70);
     box4 = new Box(920,90,70,70);
   
box14 = new Box(750,160,70,70);
    box3 = new Box(750,160,70,70);
    
    box5 = new Box(750,160,70,70);
  
  
box16 = new Box(840,140,70,70);
box17 = new Box(840,140,70,70);
box18 = new Box(840,140,70,70);

   box20 = new Box(840,140,70,70);
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);
    strokeWeight(4);
    textSize(30);
    stroke(3); 
    fill('blue');
     text("YOU CAN'T CATCH ME MR.SUPERMAN,HA HA HA!!!!!!",500,90); 
    ground.display();
superman1.display();
monster1.display();
box1.display();

box1.display();
box2.display();

box3.display();
box4.display();

box16.display();
box5.display();

box14.display();
box17.display();
box18.display();


box20.display(); 






}

