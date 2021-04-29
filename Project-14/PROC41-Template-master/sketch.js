const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var drops;
var world;
var bg,bgIMG;

function preload(){
  bgIMG = loadImage("street-suburb-district-houses-night-residential-vector-cartoon-landscape-suburban-cottages-moon-stars-dark-sky-city-198822964");
}

function setup(){
   
    createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

    bg = createSprite(800,350);
    bg.addImage(bgIMG);
    bg.scale = 2;

    dropsDiameter=40;

    var render = Render.create({
        element: document.body,
        engine: engine,
        options: {
          width: 1200,
          height: 700,
          wireframes: false
        }
      });

      Engine.run(engine);
}

function draw(){
    rectMode(CENTER);
    background(230);
  
    drawSprites();
  
    drops.display();
}   

