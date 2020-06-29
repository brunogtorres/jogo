function preload() {
  imagemMoeda = loadImage('imagens/assets/moeda.png');
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemCoracao = loadImage('imagens/assets/coracao.png');
  imagemTelaInicial = loadImage('imagens/cenario/telaInicial.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  imagemInimigoGrande = loadImage('imagens/inimigos/troll.png');
  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
  imagemGameOver = loadImage('imagens/assets/game-over.png');
  fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');
  fita = loadJSON('fita/cartucho.json');
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  somDoPulo = loadSound('sons/somPulo.mp3');
  somGameOver = loadSound('sons/GameOver.mp3');
  somMoeda = loadSound('sons/moeda.mp3');
  somDano = loadSound('sons/dano.mp3');
}