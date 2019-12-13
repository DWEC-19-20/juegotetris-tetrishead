# Práctica 4.1 TETRIS (Desarrollo web en entorno cliente)

El proyecto ha consistido en recrear el mitico videojuego "Tetris" utilizando el elemento canvas de HTML5 y javaScript.

### Requisitos 📋
Navegadores con versiones que soporten HTML5. 

## Comenzando 🚀

### Historia
El Tetris, uno de los juegos de computadora más populares del mundo a lo largo de la historia, 
fue creado el 6 de junio de 1985 por el inventor sovietico Alexei Pajitnov.
### Mecanica del juego
Consiste básicamente en ir encajando piezas de diferentes formas y tamaños que 
caen desde la parte superior de la pantalla para completar lineas sin dejar huecos. Una vez creadas, 
desaparecen, sumando 10 puntos a la puntuacion del jugador. A medida que la puntuacion aumenta, la 
velocidad a la que caen las piezas tambien aumenta haciendose mas dificil ir completando lineas.
Cuando una línea horizontal se completa, esa línea desaparece y todas las piezas que están por encima
descienden una posición, liberando espacio de juego y por tanto facilitando la tarea de situar nuevas 
piezas. El juego acaba cuando las piezas se amontonan hasta llegar a lo más alto, interfiriendo la 
creación de más piezas.
  
### Controles:
  
    - Rotacion de la pieza:   cursor "arriba" ⬆️ 
    - Desplazamiento lateral: cursores "izquierda" ⬅️ o "derecha" ➡️  
    - Descender mas rapido:   curso "abajo" ⬇️
      
### Botones:
![New Game](https://raw.githubusercontent.com/DWEC-19-20/juegotetris-tetrishead/master/img/newGame.PNG?raw=true) Boton para comenzar una nueva partida.
![Dificultad](https://github.com/DWEC-19-20/juegotetris-tetrishead/blob/master/img/level.PNG) Aumenta la velocidad de caida de las piezas (4 niveles disponibles).
![Mute](https://github.com/DWEC-19-20/juegotetris-tetrishead/blob/master/img/mute.PNG?raw=true) Silencia la musica.

## Construido con 🛠️
  - HTML5 
  - CSS
  - JavaScript
  
## Directorios y ficheros 📁

  * Audio: Contiene un fichero con extension .mp3. Cancion original del juego. 
           Se activa al comenzar el juego y puede silenciarse pulsando un boton de "mute".
	
  * css: Contiene la hoja de estilos.
		
  * js: Contiene los ficheros:
  
  	**- script.js:**
	
	**- juego.js:**

	**- tablero.js:** Contiene las funciones necesarias para crear el tablero, dibujar en el canvas, comprobar si esta vacia la 		posicion donde se fija la pieza, y la funcion necesaria para eliminar filas completas y sumar puntuacion.

	**- pieza.js:**

	**- tetrominos.js:** Contiene los arrays multidimensionales que forman las piezas.

  * index.html: Contiene el codigo html con el que se ejecuta el juego.

## Reparar ⚠️🔧

- ❗️ Mostrar en un segundo canvas la siguiente pieza.
- ❗️ Hacerlo responsive.
- ❗️ Aumentar la velocidad a medida que aumenta la puntuacion.
- ❗️ Visualizar animacion de combos.
- ❗️ Mantener puntuacion maxima.

  
## Autores ✒️

Aquellos que ayudaron a levantar el proyecto desde sus inicios

* **David Balboa** - *CSS* - *JS* - [itsnotLonee](https://github.com/itsnotLonee)
* **Javier Berrocal** - *Documentación* - *JS* - [javiCE98](https://github.com/javiCE98)
* **Isaac Taveras** - *Documentación* - *JS* - [isaacdaw2](https://github.com/isaacdaw2)
* **Carlos Asenjo** - *Documentación* - *JS* - [javiCE98](https://github.com/CarlosAsenjo)
