let xMascote = 70
let yMascote = 340
let MeusPontos = 0;

let colisao = false;


//a ponta do cabelo é o ponto de colisão, só vai resetar quando encostar na ponta

function verificaColisao() {

    for(let i = 0; i < imagensCarros.length; i++) {
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarros, alturaCarros, xMascote + 17, yMascote + 17, 15)

    if (colisao) {
        
        yMascote = 340
        xMascote = 70

        if (MeusPontos > 0) {
            MeusPontos -= 1
        }
       
    }  
    }
      

    print('colisão acontecendo', colisao);
    
}

function voltarPontoInicial() {
    yMascote = 340;
}
  
function mostrarMascote() {

     //o image permite manipulat=r o objeto no eixo X e Y como também o W e H
    image(imagemDoMascote,xMascote,yMascote,50,50);
    
}
function incluirPontos() {

    text(MeusPontos, 20,25)
    fill(color(255,0,0))
    textSize(21)
    if (yMascote < 0) {
        yMascote = 340;
        MeusPontos ++;
}
    
    
}
function movimentoMascote() {
    
    if(keyIsDown(UP_ARROW)){
        yMascote -= 3;
        imagemDoMascote = loadImage("img/kayque-surpreso.png")

        
    }
    if(keyIsDown(DOWN_ARROW)){
        yMascote += 3;
        imagemDoMascote = loadImage("img/kayque-serio.png")

       
    }
    if(keyIsDown(LEFT_ARROW)){
        xMascote -= 3;
        imagemDoMascote = loadImage("img/kayque-esquerda.png")

        
    }
    if(keyIsDown(RIGHT_ARROW)){
        xMascote += 3;
        imagemDoMascote = loadImage("img/kayque-direita.png")

       
    }
   
}