const cvs = document.getElementById("tetris");//Coje el ID del index.html del canvas y la guarda en la constante cvs
var juego = new Juego(cvs);//Guarda en la variable juego un objeto de la clase Juego al que le pasa la constante cvs
document.addEventListener("keydown", juego.control);//Se registra un evento con el nombre keydown usando el objeto juego.control

juego.tablero.dibujarTablero();//Se llama al método dibujar tablero usando el objeto tablero y juego,y lo que hace es dibujar casillas en todas las posiciones indicadas
juego.tablero.dibujarCasilla(0, 0,"white");//Se llama al método dibujarCasilla usando el objeto juego junto a tablero y se indica la posición donde se dibuja y el color
juego.caer();//Este método caer del objeto juego se utiliza para que vayan cayendo las piezas















