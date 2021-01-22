var canvas, block1, block2, block3, block4, ball;
var music;

function preload(){
   
}


function setup(){
    canvas = createCanvas(800,600);

   block1= createSprites(200,100,200,50);
   block2= createSprites(400,300,200,50);
   block3= createSprites(600,400,200,50);
   block4= createSprites(800,550,200,50);
   
  ball= createSprites(random(20,750));
}

function draw() {
    background(rgb(169,169,169));
    
    createEdgeSprites()

   if (block1.isTouching(ball) && ball.bounceOff(block1)) {
       
   }
   
 
}
drawSprites();