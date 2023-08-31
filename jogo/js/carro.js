let xCarros = [600,600,600,600,600]
let yCarros = [45,100,150,210,270]
let velocidadeCarros = [2,4,6,4,8]
let comprimentoCarros = 50;
let alturaCarros = 45;





function mostrarCarros() {
    for (let i = 0; i < imagensCarros.length; i++) {
        image(imagensCarros[i], xCarros[i], yCarros[i], comprimentoCarros, alturaCarros);
    }
}


    // image(imagemHelicoptero,xCarros,36,comprimentoCarros,alturaCarros);
    // image(imagemDoCarro2,xCarros1,96,comprimentoCarros,alturaCarros);
    // image(imagemDoCarro3,xCarros2,150,comprimentoCarros,alturaCarros);

function movimentoCarro() {

    for (let i = 0; i < imagensCarros.length; i++) {
        xCarros[i] -= velocidadeCarros[i];

        if(xCarros[i] < -50){
            xCarros[i] = 700
        }
    }
    
}