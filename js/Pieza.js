// las piezas y sus colores
const PIEZAS = [
    [Z, "orange"],
    [S, "cyan"],
    [T, "green"],
    [O, "grey"],
    [L, "purple"],
    [I, "red"],
    [J, "yellow"]
];
// La clase pieza
class Pieza {

    constructor(tetromino, color, tablero) {
        this.tetromino = tetromino; //Letra de la pieza
        this.color = color;
        this.tablero = tablero; //Referencia al tablero para dibujar
        this.tetrominoN = 0; //Empezamos con la primera forma
        this.activeTetromino = this.tetromino[this.tetrominoN]; //Array según la letra de la primera forma
        this.x = 4;
        this.y = -1;
        // propiedades numeroForma, tetrominioActual, posición x e y en el canvas  	
    }

    // rota la piezaentre las distintas formas del tetrominio
    // de debe controlar que si está muy cerca de las paredes algunas no pueden girar
    rotar = () => {}


    // rellena el tetromino de la pieza con su color en el canvas
    rellenar = (color) => {
        for (let f = 0; f < this.activeTetromino.length; f++) {

            for (let c = 0; c < this.activeTetromino.length; c++) {

                if (this.activeTetromino[f][c]) {
                    dibujarCasilla(this.x + c, this.y + f, color);
                }
            }
        }
    }

    // dibuja el color de una pieza
    dibujar = () => {

        for (let f = 0; f < this.activeTetromino.length; f++) {

            for (let c = 0; c < this.activeTetromino.length; c++) {

                if (this.activeTetromino[f][c]) {
                    dibujarCasilla(this.x + c, this.y + f, this.color);
                }
            }
        }
    }

    // borra una pieza rellenandola de casillas blancas
    borrar = () => {}

    // mover abajo la pieza, si queda fijada, deberá obtener una nueva
    moverAbajo = () => {

        juego.tablero.dibujarCasilla(this.x, this.y + 1, "blue");
        juego.piezaAleatoria();
        console.log("bajando ficha");
        this.y++;

    }

    // mover derecha la pieza hasta chocar con la pared 
    moverDerecha = () => {
        console.log("mover ficha derecha");
        this.x++;
    }

    // mover izquierda la pieza hasta chocar con la pared 
    moverIzquierda = () => {
        console.log("moviendo ficha izquierda");
        this.x--;
    }

    // fijar pieza cuando choca con el suelo u otra pieza
    // hay que comprobar si se ha formado una o varias lineas para borrarlas 
    fijar = () => {}

    // Comprueba si se produce una colisión de una pieza con el suelo u otra pieza 
    colision = (x, y, pieza) => {

    }



}