var trex, trex_running, edges;
var groundImage;
var cloud,cloudImg 

function preload() {
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  groundImage = loadImage("ground2.png")
  cloudImg = loadImage("cloud.png")
}

function setup() {
  createCanvas(600, 200);

  //criando o trex
  trex = createSprite(50, 160, 20, 50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();

  ground = createSprite(200, 180, 800, 20);
  ground.addImage(groundImage)

  //chão invisível 
  invisibleGround = createSprite(200, 190, 400, 10);
  invisibleGround.visible = false;

  //adicione dimensão e posição ao trex
  trex.scale = 0.5;
  trex.x = 50
}


function draw() {
  //definir a cor do plano de fundo 
  background(300);
  //movimento do chão
  ground.velocityX = -3
  if (ground.x < 0) {
    ground.x = ground.width / 2
  }
  //registrando a posição y do trex
  console.log(trex.y)

  //pular quando tecla de espaço for pressionada
  if (keyDown("space") && trex.y >= 155) {
    trex.velocityY = -10;

  }

  trex.velocityY = trex.velocityY + 0.5;

  //impedir que o trex caia
  trex.collide(invisibleGround)
  spawnClouds()
  drawSprites();
}

function spawnClouds(){
  if (frameCount % 45===0) {
    cloud=createSprite (580,50,25,25);
    cloud.velocityX=-3;
    cloud.addImage(cloudImg);
    cloud.scale=0.4;
    cloud.y= Math.round(random(60,90)) 
  }
}