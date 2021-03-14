const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var drops;
var maxDrops=100;
var rand;
var thunder1, thunder2,thunder3,thunder4, umbrella

function preload(){
    thunder1=loadImage("images/thunderbolt/1.png")
    thunder2=loadImage("images/thunderbolt/2.png")
    thunder3=loadImage("images/thunderbolt/3.png")
    thunder4=loadImage("images/thunderbolt/4.png")

    
}

function setup(){
   var canvas = createCanvas(400,800);
   engine = Engine.create();
    world = engine.world;
   umbrella= new Umbrella(200,600,400,400);
   
  
}

function draw(){
    background(0);
    Engine.update(engine);
    rand=Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
         var thunder=createSprite(random(10,370), random(10,30),10,10);
        switch (rand){
            default: break;
            case 1:thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break;
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            


        }
        thunder.scale=random(0.3,0.6)


    }

   for(var i=10; i<maxDrops; i++){
      drops[i].drops();
     drops[i].reposition();
   }

    umbrella.display();
    drawSprites();
}   

