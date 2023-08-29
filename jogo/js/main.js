//na função setup definimos as configurações de largura e altura
function setup() {

    createCanvas(700,400);
    
}

//na Função de desenho definimos o que será exibido
function draw() {

    background(imagemDaEstrada);

    mostrarCarros()
    movimentoCarro()
    mostrarMascote()
    incluirPontos();
    movimentoMascote();
    verificaColisao()
    
}
