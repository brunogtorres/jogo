class Pontuacao {
  constructor() {
    this.pontos = 0;
  }

  exibe() {
    textSize(50);
    textAlign(RIGHT);
    fill('#fff');
    text(parseInt(this.pontos), width - 30, 50)
  }

  adicionarPonto() {
    this.pontos = this.pontos + 0.2;
  }
  
  pegaMoeda(){
    this.pontos = this.pontos + 100
  }
  
}