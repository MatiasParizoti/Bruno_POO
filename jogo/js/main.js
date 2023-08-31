function setup() {
    createCanvas(700, 400);
}

function draw() {
    background(imagemDaEstrada);
    mostrarCarros();
    movimentoCarro();
    mostrarMascote();
    incluirPontos();
    movimentoMascote();
    verificaColisao();
   
}

// ... (o resto do seu código)
