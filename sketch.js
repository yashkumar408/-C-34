const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });

  monster = new Monster(1100,550,300);
  block1 = new Block(700,100,70,70);
  block2 = new Block(700,100,70,70);
  block3 = new Block(700,100,70,70);
  block4 = new Block(700,100,70,70);
  block5 = new Block(700,100,70,70);
  block6 = new Block(700,100,70,70);
  block7 = new Block(900,100,70,70);
  block8 = new Block(900,100,70,70);
  block9 = new Block(600,100,70,70);
  block10 = new Block(600,100,70,70);
  block11 = new Block(600,100,70,70);
  block12 = new Block(600,100,70,70);
  block13 = new Block(800,100,70,70);
  block14 = new Block(800,100,70,70);
  block15 = new Block(800,100,70,70);
  block16 = new Block(800,100,70,70);
  block17 = new Block(800,100,70,70);
  block18 = new Block(800,100,70,70);
  block19 = new Block(800,100,70,70);
  block20 = new Block(800,100,70,70);
  

  box1 = new Box(600, 100, 70, 70);
  box2 = new Box(900, 100, 70, 70);
  box3 = new Box(900, 100, 70, 70);
  box4 = new Box(900, 100, 70, 70);

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  
  

  box1.display();
  box2.display();
  box3.display();
  box4.display()

  hero.display();
  rope.display();
  monster.display();

}
function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  rope.fly();
}
