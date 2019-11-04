const cvs = document.getElementById("tetris");
var juego = new Juego(cvs);
document.addEventListener("keydown", juego.control);
juego.tablero.dibujarCasilla(0, 0, "black");
juego.tablero.dibujarTablero();
juego.caer();














