 

class Tablero {
    constructor(filas, columnas, tamañoCuadrado, ctx) {
        this.filas=filas;
        this.columnas=columnas;
        this.TC=tamañoCuadrado;
        this.ctx=ctx;


         // inicializa el tablero todos los elementos de color WHITE		
    }

    // Es vacio si tiene el color WHITE
    esVacio = (x, y) => {
        if(this.getCasilla(x,y)=="white"){
            return true;
        }
        else{
            return false;
        }
    }

    // Dibuja un en el canvas del color recibido
    dibujarCasilla = (x, y, color) => {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x * this.TC, y * this.TC, this.TC, this.TC);
        this.x=x;
        this.y=y;

        
        this.ctx.strokeStyle = "black";
        this.ctx.strokeRect(x * this.TC, y * this.TC, this.TC, this.TC);
    }

    // dibujar en el canvas según los colores del tablero
    dibujarTablero = () => {
     

        for(let f=0;f<this.filas;f++){
            for(let c=0;c<this.columnas;c++){
                this.dibujarCasilla(c,f,"white");
 
            }
        }

        var casillas=[];

        

        for(let f=0;f<this.filas;f++){
            casillas[f]=[];
            for(let c=0;c<this.columnas;c++){
                casillas[f][c]="white";
 
            }
        }

     
    }

    getFilas() {
        return this.filas;
    }


    setFilas(fila) {
       this.filas=fila;
    }

    getColumnas() {
        return this.columnas;
    }

    setColumnas(columna) {
        this.columnas=columna;
    }

    //Devuelve el color del tablero en la casilla indicada
    getCasilla = (f, c) => {
        return this.dibujarTablero.casillas[f][c];
    }

    //Cambiar el color del tablero en la casilla indicada
    setCasilla = (f, c, color) => {
        return this.dibujarTablero.casillas[f][c]=color;
    }

    // Eliminamos las filas que estén completas e incrementamos la puntuación
    eliminarFilasCompletas = () => {}

    
}