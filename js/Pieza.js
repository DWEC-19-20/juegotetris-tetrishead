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
        /*
        this.borrar();
        this.activeTetromino = this.tetromino[this.tetrominoN];
        this.tetrominoN = (this.tetrominoN + 1) % this.tetromino.length;
        this.activeTetromino = this.tetromino[this.tetrominoN];
        this.dibujar();
       */
      
      let nextPattern = this.tetromino[(this.tetrominoN + 1)%this.tetromino.length];
      let kick = 0;
      
      if(this.colision(0,0,nextPattern)){
          if(this.x > this.tablero.Columnas/2){
              // it's the right wall
              kick = -1; // we need to move the piece to the left
          }else{
              // it's the left wall
              kick = 1; // we need to move the piece to the right
          }
      }
      
      if(!this.colision(kick,0,nextPattern)){
          this.borrar();
          this.x += kick;
          this.tetrominoN = (this.tetrominoN + 1)%this.tetromino.length; // (0+1)%4 => 1
          this.activeTetromino = this.tetromino[this.tetrominoN];
          this.dibujar();
      }
    }


    


    // rellena el tetromino de la pieza con su color en el canvas
    rellenar = (color) => {
        for(var f=0; f<this.activeTetromino.length; f++){
            for(var c=0; c<this.activeTetromino.length; c++){
                if(this.activeTetromino[f][c]){
                    this.tablero.dibujarCasilla(c+this.x, f+this.y,color);
                    
                   }                
            }            
        }                              
    }

    // dibuja el color de una pieza
    dibujar = () => {
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
    }

    // mover derecha la pieza hasta chocar con la pared 
    moverDerecha = () => {
        if(!this.colision(1,0,this.activeTetromino)){
            
            this.borrar();
            this.x++;
            this.dibujar();
           
        } 
    }

    // mover izquierda la pieza hasta chocar con la pared 
    moverIzquierda = () => {
        if(!this.colision(-1,0,this.activeTetromino)){
            
            this.borrar();
            this.x--;
            this.dibujar();
            
        }
    }

    // fijar pieza cuando choca con el suelo u otra pieza
    // hay que comprobar si se ha formado una o varias lineas para borrarlas 
    fijar = () => {

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
   


}
