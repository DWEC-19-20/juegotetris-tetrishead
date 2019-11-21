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
        this.x = 3;
        this.y = -2;
        // propiedades numeroForma, tetrominioActual, posición x e y en el canvas  	
    }

    // rota la piezaentre las distintas formas del tetrominio
    // de debe controlar que si está muy cerca de las paredes algunas no pueden girar
    rotar = () => {}


    // rellena el tetromino de la pieza con su color en el canvas
    rellenar = (color) => {
        juego.tablero.dibujarCasilla(this.x,this.y,color);
    }

    // dibuja el color de una pieza
    dibujar = () => {

        for (let f = 0; f < this.activeTetromino.length; f++) {

            for (let c = 0; c < this.activeTetromino.length; c++) {

                if (this.activeTetromino[f][c]) {
                    juego.tablero.dibujarCasilla(this.x + c, this.y + f, this.color);
                }
            }
        }
    }

    // borra una pieza rellenandola de casillas blancas
    borrar = () => {

        for (let f = 0; f < this.activeTetromino.length; f++) {

            for (let c = 0; c < this.activeTetromino.length; c++) {

                if (this.activeTetromino[f][c]) {
                    juego.tablero.dibujarCasilla(this.x + c, this.y + f, "white");
                }
            }
        }
    }

    // mover abajo la pieza, si queda fijada, deberá obtener una nueva
    moverAbajo = () => {

        this.borrar();
        this.y++;
        this.dibujar();

        if(this.y>=juego.tablero.filas){
            this.y=0;
            this.x=Math.floor((Math.random()*juego.tablero.columnas));
            this.color=PIEZAS[Math.floor((Math.random()*PIEZAS.length))];
        }
    }

    // mover derecha la pieza hasta chocar con la pared 
    moverDerecha = () => {
        console.log("mover ficha derecha");
        this.borrar();
        this.x++;
        this.dibujar();
    }

    // mover izquierda la pieza hasta chocar con la pared 
    moverIzquierda = () => {
        console.log("moviendo ficha izquierda");
        this.borrar();
        this.x--;
        this.dibujar();
    }

    // fijar pieza cuando choca con el suelo u otra pieza
    // hay que comprobar si se ha formado una o varias lineas para borrarlas 
    fijar = () => {}

    // Comprueba si se produce una colisión de una pieza con el suelo u otra pieza 
    colision = (x, y, pieza) => {

    }

}