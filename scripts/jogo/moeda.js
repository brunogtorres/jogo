class Moeda extends Animacao {
  constructor(matriz, baseCollisionPolygon, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade, delay) {
    super(matriz, baseCollisionPolygon, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)
    this.delay = delay;
    this.velocidade = 5;
    this.x = width + this.delay;
  }

  move() {
    this.x = this.x - this.velocidade - this.delay
    if (this.x < -this.largura) {
      this.x = width
    }
  }

  aparece() {
    this.x = width;
  }
  
  some(){
   this.x = width + 100;
  }
}