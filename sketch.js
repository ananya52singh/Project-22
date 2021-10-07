
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ground;

var leftSide;
var rightSide;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
 
  

  ground =new Ground(200,390,1200,10);
 
leftSide = new Ground(500,350,10,90);
rightSide = new Ground(700,350,10,90);


  var ball_options={
    restitution:0.5
  }
  
  ball=Bodies.circle(150,200,20,ball_options)
  World.add(world,ball)


  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  
  ellipse(ball.position.x,ball.position.y,10,10)

  ground.show();
  leftSide.show();
  rightSide.show();

  Engine.update(engine);
}

function keyPressed(){

  if(keyCode === UP_ARROW){

    Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})

  }
}

