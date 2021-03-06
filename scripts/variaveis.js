let imagemCenario;
let imagemPersonagem;
let imagemInimigo;
let imagemInimigoGrande;
let imagemInimigoVoador;
let imagemGameOver;
let imagemCoracao;
let imagemTelaInicial;
let imagemMoeda;
let SomDoPulo;
let jogo;
let vida;
let maxpontos = 0;

let fita
let somGameOver;
let cenario;
let somDoJogo;
let somMoeda;
let somDano;
let personagem;
let inimigo;
let inimigoGrande;
let inimigoVoador;
let moeda;
let pontuacao;
let cenaAtual = 'telaInicial';
let cenas;
let telaInicial;
let fonteTelaInicial;
let botaoGerenciador;

const matrizInimigo = [
  [0, 0],
  [105, 0],
  [210, 0],
  [315, 0],
  [0, 104],
  [105, 104],
  [210, 104],
  [315, 104],
  [0, 208],
  [105, 208],
  [210, 208],
  [315, 208],
  [0, 312],
  [105, 312],
  [210, 312],
  [315, 312],
  [0, 409],
  [105, 409],
  [210, 409],
  [315, 409],
  [0, 503],
  [105, 503],
  [210, 503],
  [315, 503],
  [0, 609],
  [105, 609],
  [210, 609],
  [315, 609],
]
const matrizPersonagem = [
  [0, 0],
  [220, 0],
  [440, 0],
  [660, 0],
  [0, 270],
  [220, 270],
  [440, 270],
  [660, 270],
  [0, 540],
  [220, 540],
  [440, 540],
  [660, 540],
  [0, 810],
  [220, 810],
  [440, 810],
  [660, 810]
]

const matrizInimigoGrande = [
  [0, 0],
  [400, 0],
  [800, 0],
  [1200, 0],
  [1600, 0],
  [0, 400],
  [400, 400],
  [800, 400],
  [1200, 400],
  [1600, 400],
  [0, 800],
  [400, 800],
  [800, 800],
  [1200, 800],
  [1600, 800],
  [0, 1200],
  [400, 1200],
  [800, 1200],
  [1200, 1200],
  [1600, 1200],
  [0, 1600],
  [400, 1600],
  [800, 1600],
  [1200, 1600],
  [1600, 1600],
  [0, 2000],
  [400, 2000],
  [800, 2000],
]

const matrizInimigoVoador = [
  [0, 0],
  [200, 0],
  [400, 0],
  [0, 150],
  [200, 150],
  [400, 150],
  [0, 300],
  [200, 300],
  [400, 300],
  [0, 450],
  [200, 450],
  [400, 450],
  [0, 600],
  [200, 600],
  [400, 600],
  [0, 750],
]

const baseCollisionPolygonPersonagem = [
    [30, 5],
    [80, 5],
    [110, 60],
    [50, 130],
    [10, 70]
  ];
  
const baseCollisionPolygonInimigo = [
    [5, 25],
    [15, 10],
    [52, 10],
    [52, 47],
    [15, 47]
]

const baseCollisionPolygonInimigoGrande = [
    [20, 80],
    [80, 105],
    [120, 20],
    [195, 130],
    [150, 170],
    [20, 140]
]

const baseCollisionPolygonInimigoVoador = [
    [15, 20],
    [90, 15],
    [90, 70],
    [15, 60]
]

const matrizMoeda = [
  [0, 0]]

const baseCollisionPolygonMoeda = [
    [15, 0],
    [40, 0],
    [40, 40],
    [15, 40]
]

const inimigos = []