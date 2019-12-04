var cvs = document.createElement('canvas');
cvs.id = 'tablero';
cvs.width = "200";
cvs.height = "800";
document.body.appendChild(cvs);
const ctx = cvs.getContext("2d");

const ROW = 20;
const COL = COLUMN = 10;
const SQ = squareSize = 20;
const HUECO = "WHITE";

const COLORES = ["red",
    "green",
    "yellow",
    "blue",
    "purple",
    "cyan",
    "orange"
];

// dibujar un cuadrado
function dibujarCasilla(x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x * SQ, y * SQ, SQ, SQ);

    ctx.strokeStyle = "BLACK";
    ctx.strokeRect(x * SQ, y * SQ, SQ, SQ);
}


var tablero = [];
for (r = 0; r < ROW; r++) {
    tablero[r] = [];
    for (c = 0; c < COL; c++) {
        tablero[r][c] = HUECO;
    }
}


// dibujar the tablero
function dibujarTablero() {
    for (r = 0; r < ROW; r++) {
        for (c = 0; c < COL; c++) {
            dibujarCasilla(c, r, tablero[r][c]);
        }
    }
}

dibujarTablero();

class Pieza {

    constructor(x, y, color) {
        this.color = color;
        this.x = x;
        this.y = y;
        dibujarCasilla(this.x, this.y, this.color);
    }

    dibujar() {
        this.rellenar(this.color);
    }

    rellenar(color) {
        dibujarCasilla(this.x, this.y, color);
    }

    borrar() {
        this.rellenar(HUECO);
    }

    // mover abajo la pieza
    moverAbajo() {

        this.borrar();
        this.y++;
        if (this.y >= ROW) {
            this.y = 0;
            this.x = Math.floor((Math.random() * COL));
            this.color = COLORES[Math.floor((Math.random() * COLORES.length))];
        }
        this.dibujar();

    }
}

var p = new Pieza(2, 0, "red");

let ComenzarCaer = Date.now();

function caer() {
    let now = Date.now();
    let delta = now - ComenzarCaer;
    if (delta > 1000) {
        p.moverAbajo();
        ComenzarCaer = Date.now();
    }

    requestAnimationFrame(caer);

}

caer();


function colision() {
    
}