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
<<<<<<< HEAD
        // propiedades numeroForma, tetrominioActual, posición x e y en el canvas 
        this.tablero = tablero; // referencia al tablero para dibujar
        this.tetromino = tetromino; // letra de la pieza
        this.color = color;  
        this.tetrominoN = 0; // empezamos con la primera forma
        this.activeTetromino = this.tetromino[this.tetrominoN];  // array según la letra de la primera forma  
        this.x = 3; 
        this.y = -2;  
    }

    // rota la pieza entre las distintas formas del tetrominio
    // se debe controlar que si está muy cerca de las paredes algunas no pueden girar
    rotar = () => {
        this.borrar();
        this.activeTetromino = this.tetromino[this.tetrominoN];
        this.tetrominoN = (this.tetrominoN + 1) % this.tetromino.length;
        this.activeTetromino = this.tetromino[this.tetrominoN];
        this.dibujar();
        
=======
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
>>>>>>> c4c743fd2be813657afa6a8403a8dec8ed1a281d
    }


    // rellena el tetromino de la pieza con su color en el canvas
    rellenar = (color) => {
<<<<<<< HEAD
        for(var f=0; f<this.activeTetromino.length; f++){
            for(var c=0; c<this.activeTetromino.length; c++){
                if(this.activeTetromino[f][c]){
                    this.tablero.dibujarCasilla(c+this.x, f+this.y, this.color);
                    
                   }                
            }            
        }                                       
=======
        juego.tablero.dibujarCasilla(this.x,this.y,color);
>>>>>>> c4c743fd2be813657afa6a8403a8dec8ed1a281d
    }

    // dibuja el color de una pieza
    dibujar = () => {
<<<<<<< HEAD
        this.rellenar(this.color);
    }

    // borra una pieza rellenandola de casillas blancas
    borrar = () => {        
         this.rellenar(HUECO);
    }

    // mover abajo la pieza, si queda fijada, deberá obtener una nueva
    moverAbajo = () => {      
        
        if(!this.colision(0,1,this.activeTetromino)){
            this.borrar();
            this.y++;
            this.dibujar();
        } else {
            this.fijar();
        }
=======

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
        
>>>>>>> c4c743fd2be813657afa6a8403a8dec8ed1a281d
    }

    // mover derecha la pieza hasta chocar con la pared 
    moverDerecha = () => {
<<<<<<< HEAD
        if(!this.colision(1,0,this.activeTetromino)){
            
            this.borrar();
            this.x++;
            this.dibujar();
           
        } 
=======
        console.log("mover ficha derecha");
        this.borrar();
        this.x++;
        this.dibujar();
>>>>>>> c4c743fd2be813657afa6a8403a8dec8ed1a281d
    }

    // mover izquierda la pieza hasta chocar con la pared 
    moverIzquierda = () => {
<<<<<<< HEAD
        if(!this.colision(-1,0,this.activeTetromino)){
            
            this.borrar();
            this.x--;
            this.dibujar();
            
        }
=======
        console.log("moviendo ficha izquierda");
        this.borrar();
        this.x--;
        this.dibujar();
>>>>>>> c4c743fd2be813657afa6a8403a8dec8ed1a281d
    }

    // fijar pieza cuando choca con el suelo u otra pieza
    // hay que comprobar si se ha formado una o varias lineas para borrarlas 
    fijar = () => {
<<<<<<< HEAD

        for(let f=0;f<this.activeTetromino.length;f++){
            for(let c=0;c<this.activeTetromino.length;c++){
                if(!this.activeTetromino[f][c]){
                    continue;
                }
                if(this.y+f<0){
                    alert("Game Over");
                    juego.gameOver=true;
                    break;
                }
                this.tablero._tablero[this.y+f][this.x+c]=this.color;
            }
        }

        this.tablero.eliminarFilasCompletas();
        juego.pieza = juego.piezaAleatoria();
 
    }

    // Comprueba si se produce una colisión de una pieza con el suelo u otra pieza 
    colision = (x, y, pieza) => {
        



        // para cada casilla de la tetrominio activo
        for(var f=0; f<pieza.length; f++){
            for(var c=0; c<pieza.length; c++){
                
                // si la casilla está vacía la obviamos
                if (!pieza[f][c]) { 
                    continue;
                }

                
                // nuevas coordenadas de la casilla
                // después del movimiento
                
                let nuevaX = this.x + c + x;
                let nuevaY = this.y + f + y;
                
                //condiciones 
                if (nuevaX<0 || nuevaX>=this.tablero.columnas || nuevaY>=this.tablero.filas) {
                    return true; //sale del tablero
                }
                
                if (nuevaY<0) { //para evitar acceder a tablero[-1]
                    continue;
                }

                
                if (!juego.tablero.esVacio(nuevaY, nuevaX) ) {
                    return true;
                }
            }
        }
        return false;
    }
   
=======

        
        juego.pieza = juego.piezaAleatoria();
    }
>>>>>>> c4c743fd2be813657afa6a8403a8dec8ed1a281d

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