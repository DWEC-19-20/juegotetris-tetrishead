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
  
  	**- script.js:** Inicializa el juego y controla los botones de la vista.
      
  	**- juego.js:** Controla la salida de las piezas, crea la siguiente pieza de manera aleatoria, y la entrada por teclado.

  	**- tablero.js:** Contiene las funciones necesarias para crear el tablero, dibujar en el canvas, comprobar si esta vacia la 				posicion, y la funcion necesaria para eliminar filas completas y sumar puntuacion.
          
  	**- pieza.js:** Calcula y controla el desplazamiento, rotacion y fijacion de la pieza actual.
      
  	**- tetrominos.js:** Contiene los arrays multidimensionales que forman las piezas.

  * index.html: Contiene el codigo html con el que se ejecuta el juego.

## Reparar ⚠️🔧

- ❗️ Mostrar en un segundo canvas la siguiente pieza.
- ✔️ Hacerlo responsive para quitar el scroll
- ❗️ Aumentar la velocidad a medida que aumenta la puntuacion.
- ❗️ Visualizar animacion de combos.
- ❗️ Mantener puntuacion maxima.

  
## Autores ✒️

Aquellos que ayudaron a levantar el proyecto desde sus inicios

* **David Balboa** - *CSS* - *JS* - [itsnotLonee](https://github.com/itsnotLonee)
* **Javier Berrocal** - *Documentación* - *JS* - [javiCE98](https://github.com/javiCE98)
* **Isaac Taveras** - *Documentación* - *JS* - [isaacdaw2](https://github.com/isaacdaw2)
* **Carlos Asenjo** - *Documentación* - *JS* - [javiCE98](https://github.com/CarlosAsenjo)



División de tareas de la práctica
//Entre todos los integrantes hemos ido modificando cosas y cuando hemos conseguido la solución de cada parte la hemos ido integrando.


1.Cómo usuario querría poder mover las piezas del Tetris pulsando flecha izquierda o derecha para que pueda elegir donde situar la pieza.

Carlos Asenjo

2.Cómo usuario querría poder mover las piezas del Tetris rápidamente pulsando flecha abajo una vez elegida donde situar la pieza para que pueda ganar tiempo.

Carlos Asenjo

3.Cómo usuario querría poder girar las piezas del Tetris pulsando flecha arriba para que encaje mejor.

Carlos Asenjo

4.Cómo usuario querría visualizar mi puntuación y/o lineas desbloqueadas para que sepa si voy a superar un record

David Balboa

5.Cómo usuario querría visualizar la/s siguiente/s pieza/s para que pueda planear donde ponerla

David Balboa

6.Cómo usuario querría visualizar el record más alto para que intente superarlo

Sin realizar

7.Cómo usuario querría aumentar la dificultad aumentando la dificultad para que suponga un reto mayor obtener un record

David Balboa

8.Cómo programador analista querría utilizar un canvas HTML5 para que se visualice el array del juego de 10 x 20

Javier Berrocal

9.Cómo programador analista querría tener definidas las clases Juego, Pieza, Tablero para utilizar las ventajas de la programación orientada a objetos

Javier Berrocal

10.Cómo programador analista querría tener en la clase Pieza tenga las propiedades tetromino, color, tetrominioActual, númeroTetrominio, posiciónX, posiciónY, posición además de redibir una instancia del tablero para poder utilizarlo en el juego.

Javier Berrocal

11.Cómo programador analista querría tener en la clase Pieza los métodos moverIzquierda, moverDerecha, rotar y moverAbajo para que se mueva la pieza activa.

Isaac Taveras

12.Cómo programador analista querría que el método rotar de la clase Pieza controle si está en el borde del tablero para poder girar la pieza solo si tiene espacio.

Isaac Taveras

13.Cómo programador analista querría tener en la clase Pieza el método fijar cuando la pieza activa toque una pieza ocupada del tablero para que se pueda eliminar filas y obtener la siguiente pieza.

Isaac Taveras

14.Cómo programador analista querría que el cuando se fije una pieza se llame a la función comprobarFilas de la clase Tablero, para que elimine las filas completadas.

Isaac Taveras

15.Cómo programador analista querría que el cuando se fije una pieza se llama a la función termine el juego si la pieza ocupa una posición más alta al tablero, para que el juego termine.

Javier Berrocal

16.Cómo programador analista querría modificar la función caer para que después de un número de lineas completadas, aumente el nivel, para que caiga la pieza con más velocidad.

Carlos Asenjo

17.Cómo programador analista querría tener una función piezaAleatoria en la clase Juego para que obtenga la pieza aleatoria en el juego y la siguiente a jugar.

David Balboa

18.Cómo programador analista querría tener test unitarios de las funciones esVacio, eliminarFilasCompletas, colision, fijar para que este seguro del correcto funcionamiento del juego.

Sin realizar
