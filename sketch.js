const Engine = Matter.Engine;
const World = Matter.World;
const Constraint = Matter.Constraint;
const Bodies = Matter.Bodies;

//global variables
var umbrella, drop;
var engine, world;
var drops = [];
var maxDrops = 100;
var thunder1, thunder2, thunder3,thunder4;
var thunder;

function preload(){
   thunder1 = loadImage("images/1.png");
   thunder2 = loadImage("images/2.png");
   thunder3 = loadImage("images/3.png");
   thunder4 = loadImage("images/4.png");
}

function setup(){
   createCanvas(displayWidth, displayHeight);

   engine = Engine.create();
   world = engine.world;

   umbrella = new Umbrella(displayWidth/4,displayHeight/8);
}

function draw(){
    background(0);

    for(var i = 0; i<maxDrops; i++){
       drops.push(new Drop(random(0,400), random(0,400)));
    }

    var rand = Math.round(random(1,2));
    thunderCreatedFrame = frameCount;
    thunder = createSprite(random(10,370), random(10,30), 10, 10);
    switch(rand){
      case 1 : thunder.addImage(thunder1);
      break;
      case 2 : thunder.addImage(thunder2);
      break;
      case 3 : thunder.addImage(thunder3);
      break;
      case 4 : thunder.addImage(thunder4);
      break;
      default : break;
    }

    if(thunderCreatedFrame + 20 === frameCount && thunder){
      thunder.destroy();
   }

    umbrella.display();
    drops.update();
}