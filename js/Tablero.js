class Tablero {
    constructor(filas, columnas, tamañoCuadrado, ctx) {
         // inicializa el tablero todos los elementos de color WHITE
         this._f = filas;
         this._c = columnas;
    }

    // Es vacio si tiene el color WHITE
    esVacio = (x, y) => {

    }

    // Dibuja un en el canvas del color recibido
    dibujarCasilla = (x, y, color) => {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x * this.SQ, y * this.SQ, this.SQ, this.SQ);
        
        this.ctx.strokeStyle = "BLACK";
        this.ctx.strokeRect(x * this.SQ, y * this.SQ, this.SQ, this.SQ);
    }

    // dibujar en el canvas según los colores del tablero
    dibujarTablero = () => {
       for (let r = 0; r < this._f; r++) {
           for (let c = 0; c < this._c; c++) {
               dibujarCasilla(c, r, "red");
           }
       }
    };

    get filas() {
    }

    set filas(fila) {
    }

    get columnas() {

    }

    set columnas(columna) {
    }

    //Devuelve el color del tablero en la casilla indicada
    getCasilla = (f, c) => {
        
    }

    //Cambiar el color del tablero en la casilla indicada
    setCasilla = (f, c, color) => {

    }

    // Eliminamos las filas que estén completas e incrementamos la puntuación
    eliminarFilasCompletas = () => {}

}