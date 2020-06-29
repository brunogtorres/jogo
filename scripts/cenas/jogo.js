class Jogo {
  constructor() {
    this.indice = 0;
    this.mapa = fita.mapa;
  }

  setup() {
    cenario = new Cenario(imagemCenario, 3);
    pontuacao = new Pontuacao();
    vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);
    personagem = new Personagem(matrizPersonagem, baseCollisionPolygonPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270);
    moeda = new Moeda(matrizMoeda, baseCollisionPolygonMoeda, imagemMoeda, width - 52, 300, 35, 35, 165, 165, 100, 10, 100);
    const inimigo = new Inimigo(matrizInimigo, baseCollisionPolygonInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 10);
    const inimigoVoador = new Inimigo(matrizInimigoVoador, baseCollisionPolygonInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 10);
    const inimigoGrande = new Inimigo(matrizInimigoGrande, baseCollisionPolygonInimigoGrande, imagemInimigoGrande, width, 0, 200, 200, 400, 400, 10);
    inimigos.push(inimigo);
    inimigos.push(inimigoGrande);
    inimigos.push(inimigoVoador);
  }

  keyPressed(key) {
    if (key == 'ArrowUp') {
      personagem.pula();
    }
    if (key == 's') {
      botaoGerenciador = new BotaoGerenciador('Reiniciar', width/2, height/2);
      somDoJogo.stop();
      cenaAtual = 'telaInicial';
      cenas[cenaAtual].draw();
      if(pontuacao.pontos >= maxpontos){
          maxpontos = pontuacao.pontos
         }
      textAlign(CENTER);
      textSize(40);
      text('Pontuacao Maxima:', width/2,height-10);
      textAlign(RIGHT);
      textSize(40);
      text(parseInt(maxpontos), width-40,height-10);
    }
  }



  draw() {
    cenario.exibe();
    cenario.move();
    vida.draw();
    pontuacao.exibe();
    pontuacao.adicionarPonto();
    personagem.exibe();
    personagem.aplicaGravidade();
    moeda.exibe();
    moeda.move();
    //   moeda.aparece();
    const linhaAtual = this.mapa[this.indice];
    const inimigo = inimigos[linhaAtual.inimigo];
    const inimigoVisivel = inimigo.x < -inimigo.largura;
    inimigo.velocidade = linhaAtual.velocidade;

    inimigo.exibe();
    inimigo.move();



    if (inimigoVisivel) {
      this.indice++;
      inimigo.aparece();
      if (this.indice > this.mapa.length - 1) {
        this.indice = 1;
      }
    }


    if (personagem.estaColidindo(inimigo)) {
      console.log('colidiu');
      vida.perdeVida();
      personagem.ficaInvencivel();
      somDano.play();
      if (vida.vidas == 0) {
        somDoJogo.stop();
        somGameOver.play();
        
        image(imagemGameOver, windowWidth / 2 - 206, windowHeight / 5, 412, 78);
        textFont(fonteTelaInicial);
        textAlign(CENTER);
        textSize(50);
        text('Voce fez', width / 2, height / 2);
        text(parseInt(pontuacao.pontos), width / 2, height / 2 + 35);
        text('pontos', width / 2, height / 2 + 85);
        textSize(30);
        text('Para reniciar aperte S', width / 2, height / 2 + 135);
        noLoop();
        
      }
    }
    if (personagem.estaColidindo(moeda)) {
      pontuacao.pegaMoeda();
      //personagem.ficaInvencivel();
      moeda.some();
      somMoeda.play();
    }
  }
}