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
        this.y = -1;
        // propiedades numeroForma, tetrominioActual, posición x e y en el canvas  	
    }

    // rota la piezaentre las distintas formas del tetrominio
    // de debe controlar que si está muy cerca de las paredes algunas no pueden girar
    rotar = () => {

        this.borrar();
        this.activeTetromino=this.tetromino[this.tetrominoN];
        this.tetrominoN=(this.tetrominoN+1)%this.tetromino.length;
        this.activeTetromino=this.tetromino[this.tetrominoN];
        this.dibujar();
    }


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
        console.log(`mover abajo ${this.y}` );
        if(!this.colision(this.x,this.y,this.activeTetromino)){
        this.borrar();
        this.y++;
        this.dibujar();
        }
        else {
            this.fijar();
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
    fijar = () => {

        
        juego.pieza = juego.piezaAleatoria();
    }

    // Comprueba si se produce una colisión de una pieza con el suelo u otra pieza 
    colision = (x, y, pieza) => {
        
        if(pieza.length+y > 20){
            console.log(`atraviesa la fila $(20-y)`);
            console.log(pieza[20-y]);
            if(pieza[20-y].reduce((x,y)=>x+y)>0);
                return true;
        }
        return false;
    }

}