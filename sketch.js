const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2,box3, box4, box5;
var pillar1, pillar2;
var block;
var ground;

function setup(){
    var canvas = createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;
    var groundOptions ={
        isStatic:true
    }
     ground = Bodies.rectangle(200, 570, 1000, 20, groundOptions);
     World.add(world, ground);
    box1 = new Box(205, 150);                      
    box2 = new Box (550, 150);
    box3 = new Box (270, 150);
    box4 = new Box (390,150);
    box5 = new Box (450, 150);
    pillar1 = new Pillars (250,300);
    pillar2 = new Pillars (500, 300);
    block = new main (350, 300);
    
}

function draw(){
    background(0);
    
    Engine.update(engine);
    rectMode(CENTER);
    fill("white");
    rect(ground.position.x, ground.position.y, 1200, 20);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    pillar1.display();
    pillar2.display();
    block.display();
    
}