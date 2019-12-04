const HUECO = "WHITE";

class Tablero {
    constructor(filas, columnas, tamañoCuadrado, ctx) {
<<<<<<< HEAD
        // inicializa el tablero todos los elementos de color WHITE
=======
>>>>>>> c4c743fd2be813657afa6a8403a8dec8ed1a281d
        this.filas = filas;
        this.columnas = columnas;
        this.TC = tamañoCuadrado;
        this.ctx = ctx;
<<<<<<< HEAD
        this._tablero = [];        
        this.crearTablero();
=======
>>>>>>> c4c743fd2be813657afa6a8403a8dec8ed1a281d
    }

    // Es vacio si tiene el color WHITE
    esVacio = (x, y) => {
<<<<<<< HEAD
        if (this.getCasilla(x, y) == "WHITE") {
            return true;
        } else {
=======

        if (this.getCasilla(x, y) == "white") {

            return true;

        } else {

>>>>>>> c4c743fd2be813657afa6a8403a8dec8ed1a281d
            return false;
        }
    }

    // Dibuja un en el canvas del color recibido
    dibujarCasilla = (x, y, color) => {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x * this.TC, y * this.TC, this.TC, this.TC);
<<<<<<< HEAD

        this.ctx.strokeStyle = "BLACK";
=======
        this.x = x;
        this.y = y;

        this.ctx.strokeStyle = "black";
>>>>>>> c4c743fd2be813657afa6a8403a8dec8ed1a281d
        this.ctx.strokeRect(x * this.TC, y * this.TC, this.TC, this.TC);

    }

    // dibujar en el canvas según los colores del tablero
    dibujarTablero = () => {
<<<<<<< HEAD
        for (let f = 0; f < this.filas; f++) {
            for (let c = 0; c < this.columnas; c++) {
                this.dibujarCasilla(c, f, this._tablero[f][c]);
            }
        }
    }

    crearTablero = () => {
        for (let f = 0; f < this.filas; f++) {
            this._tablero[f] = [];
            for (let c = 0; c < this.columnas; c++) {
                this._tablero[f][c] = HUECO;
=======

        for (let f = 0; f < this.filas; f++) {

            for (let c = 0; c < this.columnas; c++) {

                this.dibujarCasilla(c, f, "white");

>>>>>>> c4c743fd2be813657afa6a8403a8dec8ed1a281d
            }
        }
    }

<<<<<<< HEAD
    get Filas() {
        return this.filas;
    }

    set Filas(fila) {
        this.filas = fila;
    }

    get Columnas() {
        return this.columnas;
    }

    set Columnas(columna) {
=======
    getFilas() {
        return this.filas;
    }


    setFilas(fila) {
        this.filas = fila;
    }

    getColumnas() {
        return this.columnas;
    }

    setColumnas(columna) {
>>>>>>> c4c743fd2be813657afa6a8403a8dec8ed1a281d
        this.columnas = columna;
    }

    //Devuelve el color del tablero en la casilla indicada
    getCasilla = (f, c) => {
<<<<<<< HEAD
        return this._tablero[f][c];
=======
        return this.dibujarTablero.board[f][c];
>>>>>>> c4c743fd2be813657afa6a8403a8dec8ed1a281d
    }

    //Cambiar el color del tablero en la casilla indicada
    setCasilla = (f, c, color) => {
<<<<<<< HEAD
        this._tablero[f][c] = color;
=======
        return this.dibujarTablero.board[f][c] = color;
>>>>>>> c4c743fd2be813657afa6a8403a8dec8ed1a281d
    }

    // Eliminamos las filas que estén completas e incrementamos la puntuación
    eliminarFilasCompletas = () => {
        for(let f=0; f<this.Filas;f++){
            let filasCompletas=true;
            for(let c = 0; c < this.Columnas; c++){
                filasCompletas=filasCompletas && (this._tablero[f][c] !=HUECO);
            }
            if(filasCompletas){
                // Si la fila esta completa
                
                for(let y = f; y > 1; y--){
                    for(let c = 0; c <this.Columnas; c++){
                        this._tablero[y][c] = this._tablero[y-1][c];
                    }
                        
                }

               
                for(let c = 0; c < this.Columnas; c++){
                    this._tablero[0][c] = HUECO;
                }
                // Incrementa la puntuación
                juego.score += 10;
            }
        }
        document.getElementById("score").innerHTML = juego.score;
        this.dibujarTablero();
    }

<<<<<<< HEAD
}
=======

}
>>>>>>> c4c743fd2be813657afa6a8403a8dec8ed1a281d
