let imagemDaEstrada;
let imagemDoMascote;
let imagemDoCarro1;
let imagemDoCarro2;
let imagemDoCarro3;
let bolo
let cafe
let dunot
let homi
let pastel
let frutas
let imagensCarros;
let imagensCarros2
let imagensCarros3


function preload() {

    imagemDaEstrada = loadImage("img/mapa.jpg")

    //imagemDoMascote = loadImage("img/mascote.png")
    imagemDoMascote = loadImage("img/kayque-serio.png")
    imagemKayqueSurpreso = loadImage("img/kayque-surpreso.png")

    //mapa1
    imagemDoCarro1 = loadImage("img/hamburger.png")
    imagemDoCarro2 = loadImage("img/coca.png")
    imagemDoCarro3 = loadImage("img/pastel.png")

//mapa2
    bolo = loadImage("img/cafe.png")
    cafe = loadImage("img/bolo.png")
    dunot = loadImage("img/dunot.png")

    //mapa3
    homi = loadImage("img/homi.png")
    pastel = loadImage("img/pastelf.png")
    frutas = loadImage ("img/frutas.png")


    imagensCarros = [imagemDoCarro1, imagemDoCarro2, imagemDoCarro3, imagemDoCarro1, imagemDoCarro2];
    imagensCarros2 = [bolo, cafe, dunot, cafe, dunot];
    imagensCarros3 = [homi,pastel,frutas,homi,pastel]
    
    
    
}