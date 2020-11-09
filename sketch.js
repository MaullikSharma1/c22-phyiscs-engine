const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, object;
var ground;
var ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  object = Bodies.rectangle(200, 100, 50, 50);
  World.add(world, object);

  var groundOptions = {
    isStatic: true
  }
  ground = Bodies.rectangle(200,390,400,20, groundOptions);
  World.add(world,ground);
  console.log(object);
  console.log(object.position.x);
  console.log (object.position.y)
  var ballOptions = {
    restitution:1.0
  }
  ball = Bodies.circle(40,40,40, ballOptions);
  World.add(world,ball);


}

function draw() {

  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(object.position.x, object.position.y, 50, 50);
  rect(ground.position.x,ground.position.y,400,20)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,40);
}