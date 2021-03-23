/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size, speed){
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;
  this.speed = speed;

  this.getHeroElement = function(){
    return '<img width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
  }

  this.mr = function(){
    this.left += this.speed;
    console.log('ok: ' + this.left);
  }
  this.moveLeft = function () {
    this.left+= 10;
  }
  this.moveRight = function () {
    this.left-=10;
  }
  this.moveDown = function () {
    this.top+= 135;
  }
  this.moveUP = function () {
    this.top-=135;
  }

}

var hero = new Hero('animated-car-image-0049.gif', 20, 30, 50,5);

function start(){
  if(hero.left < window.innerWidth - hero.size){
    hero.mr();
  }
  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 50)
}

function moveSelection(e) {
  switch (e.keyCode) { //keycode là mã nút nhấn
    case 37: // 37 39 38 40 là các mã
      hero.moveRight();
      break;
    case 39:
      hero.moveLeft() ;
      break;
    case 38:
      hero.moveUP();
      break;
    case 40:
      hero.moveDown();
      break;
  }
}
function docReady() {
  window.addEventListener('keydown', moveSelection); // keydown là tên hoạt động dùng phím
}
start();