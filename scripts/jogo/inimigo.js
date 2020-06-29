class Inimigo extends Animacao {
  constructor(matriz, baseCollisionPolygon, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade) {
    super(matriz, baseCollisionPolygon, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)

    this.velocidade = velocidade;
    this.x = width;
  }

  move() {
    this.x = this.x - this.velocidade
  }

  aparece() {
    this.x = width;
  }
}