
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine; 
var world;
var ground;
var ball;

function setup(){
var canvas=createCanvas(400,400);

engine=Engine.create();
world=engine.world;

var mutti={
    isStatic:true
}

ground=Bodies.rectangle(200,350,400,100,mutti);
World.add(world,ground);

var vatti={
     restitution:1.5
}

ball=Bodies.circle(200,200,10,vatti);
World.add(world,ball);

}

function draw(){
background("pink");

Engine.update(engine);
rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,100);

ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,10,10);

}