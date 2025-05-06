let xJogador = [20, 20, 20, 20,20,20,20];

let yJogador = [30, 90, 150, 220,300,360,430];

let jogador = ["🧑‍🦼", "🧑‍🦽", "🏃", "🐛","👯","🥀","🏌"];

let contagem = jogador.length;

let teclas = ["a","s","d","f","g","h","u",];

function setup() {
  createCanvas(460, 450);
}

function draw() {
  defineTela();
  mostraJogadores();
  desenhaChegada();
  defineVencedor();

  function defineTela() {
    if (focused == true) {
      background("rgb(108,117,108)");
    } else {
      background("#B61507");
    }
  }

  function mostraJogadores() {
    textSize(30);
    for (let i = 0; i < contagem; i++) {
      text(jogador[i], xJogador[i], yJogador[i]);
    }
  }

  function desenhaChegada() {
    fill("#03A9F4");
    rect(400, 0, 10, 450);
    fill("#061257");
    for (let yAtual = 0; yAtual < 450; yAtual += 20) {
      rect(400, yAtual, 10, 10);
    }
  }

  function defineVencedor() {
    textAlign(CENTER, CENTER);
    for (let i = 0; i < contagem; i++) {
      if (xJogador[i] > 400) {
        text(jogador[i] + "venceu", width / 2, height / 2);
        noLoop();
      }
    }
  }
}
function keyReleased() {
   for (let i = 0; i < contagem; i++) {
  if (key == teclas [i]) {
    xJogador[i] += random(20);
  }
  
}
}