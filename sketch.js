var trex, trex_running, edges;
var groundImage;
var cloud, cloudImg

var cac1, cac2, cac3, cac4, cac5, cac5

function preload() {
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  groundImage = loadImage("ground2.png")
  cloudImg = loadImage("cloud.png")
  cac1 = loadImage("obstacle1.png")
  cac2 = loadImage("obstacle2.png")
  cac3 = loadImage("obstacle3.png")
  cac4 = loadImage("obstacle4.png")
  cac5 = loadImage("obstacle5.png")
  cac6 = loadImage("obstacle6.png")
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
  spawnCac()
  drawSprites();
}

function spawnClouds() {
  if (frameCount % 45 === 0) {
    cloud = createSprite(580, 50, 25, 25);
    cloud.velocityX = -3;
    cloud.addImage(cloudImg);
    cloud.scale = 0.4;
    cloud.y = Math.round(random(60, 90));
    cloud.lifetime = 200
  }
}
function spawnCac() {
  if (frameCount % 120 === 0) {
    cacs = createSprite(580, 167, 30, 30);
    cacs.velocityX = -3;
    var num = Math.round(random(1, 6));
    switch (num) {
      case 1: cacs.addImage(cac1)
        break;
      case 2: cacs.addImage(cac2)
        break;
      case 3: cacs.addImage(cac3)
        break;
      case 4: cacs.addImage(cac4)
        break;
      case 5: cacs.addImage(cac5)
        break;
      case 6: cacs.addImage(cac6)
        break;
      default:
        break;
    }
    cacs.scale=0.4
    cacs.lifetime = 220
  }
}