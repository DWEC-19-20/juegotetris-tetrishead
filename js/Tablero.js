const HUECO = "WHITE";

class Tablero {
    constructor(filas, columnas, tamañoCuadrado, ctx) {
        // inicializa el tablero todos los elementos de color WHITE
        this.filas = filas;
        this.columnas = columnas;
        this.TC = tamañoCuadrado;
        this.ctx = ctx;
        this._tablero = [];        
        this.crearTablero();
    }

    // Es vacio si tiene el color WHITE
    esVacio = (x, y) => {
        if (this.getCasilla(x, y) == "WHITE") {
            return true;
        } else {
            return false;
        }
    }

    // Dibuja un en el canvas del color recibido
    dibujarCasilla = (x, y, color) => {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x * this.TC, y * this.TC, this.TC, this.TC);

        this.ctx.strokeStyle = HUECO;
        this.ctx.strokeRect(x * this.TC, y * this.TC, this.TC, this.TC);
    }

    // dibujar en el canvas según los colores del tablero
    dibujarTablero = () => {
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
            }
        }
    }

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
        this.columnas = columna;
    }

    //Devuelve el color del tablero en la casilla indicada
    getCasilla = (f, c) => {
        return this._tablero[f][c];
    }

    //Cambiar el color del tablero en la casilla indicada
    setCasilla = (f, c, color) => {
        this._tablero[f][c] = color;
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

}
