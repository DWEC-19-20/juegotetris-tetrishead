var cvs = document.getElementById("tetris");
const cvsNext = document.getElementById("piezaSiguiente");
var juego = new Juego(cvs, cvsNext);


let bol = 0;
var dificultad = document.getElementById("dificultad");
dificultad.addEventListener('click', function () {
    bol++;
    if (bol == 1){
        juego._velocidad = 400;
        dificultad.style.backgroundColor = "rgb(35, 112, 255)";
        dificultad.style.color = "white";
    }
    else if (bol == 2) {
        juego._velocidad = 150;
        dificultad.style.backgroundColor = "rgb(255, 152, 35)";
    } 
    else if (bol == 3) {
        juego._velocidad = 80;
        dificultad.style.backgroundColor = "rgb(204, 39, 39)";
    }
    else if (bol == 4){
        bol = 0;
        juego._velocidad = 1000;
        dificultad.style.backgroundColor = "rgb(204, 204, 204)";
        dificultad.style.color = "black";
    }
});

let bol1 = 0;
document.getElementById("start").addEventListener('click', function () {
    if (bol1 == 1)
        location.reload();
    document.getElementById("start").style.backgroundColor = "rgb(172, 16, 16)";
    document.getElementById("start").style.color = "white";
    document.addEventListener("keydown", juego.control);
    juego.tablero.dibujarCasilla(0, 0, "white");
    juego.tablero.dibujarTablero();
    juego._pSig.dibujar();
    juego.caer();
    document.getElementById("demo").play();
    bol1 = 1;
});














