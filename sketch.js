var database;
var dog;
var dogimg;
var fetchStock;
var foodS;
var happyDog;

function preload()
{
dogimg=loadImage("images/dogImg1.png")
happyDog=loadImage("images/dogImg.png")

}

function setup() {
  database=firebase.database();
  createCanvas(500,500);
  
  dog=createSprite(250,250,50,50)
  dog.addImage(dogimg);
  dog.scale=0.5;


  foodStock=database.ref('food')
  foodStock.on("value",readStock)
}


function draw() {  
background(46,139,87)

if(keyDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog)

}
  drawSprites();
 

}

function readStock(data){
foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
database.ref('/').update({
  food:x
})
}

