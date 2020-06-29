class Animacao {
  constructor(matriz, baseCollisionPolygon, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
    this.matriz = matriz;
    this.baseCollisionPolygon = baseCollisionPolygon;
    this.imagem = imagem;
    this.x = x;
    this.variacaoY = variacaoY;
    this.largura = largura;
    this.altura = altura;
    this.alturaSprite = alturaSprite;
    this.larguraSprite = larguraSprite;
    this.y = height - this.altura - this.variacaoY;
    this.frameAtual = 0;
  }

  exibe() {
    image(this.imagem, this.x, this.y, this.largura, this.altura, this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1], this.larguraSprite, this.alturaSprite);

    this.anima();
  }

  anima() {
    this.frameAtual++
    if (this.frameAtual >= this.matriz.length - 1) {
      this.frameAtual = 0;
    }
  }
}