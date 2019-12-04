class Juego {

    constructor(cvs) {
        this.ctx = cvs.getContext("2d");
        this._tablero = new Tablero(20, 10, 20, this.ctx);
        this._pieza = this.piezaAleatoria();
        this.gameOver = false;
        this._comenzarCaer = Date.now();
        this.score = 0;
        this._velocidad= 1000;
    }

    // devuelve una pieza aleatoria
    piezaAleatoria = () => {
        var randomN = Math.floor(Math.random() * PIEZAS.length);
        
        return new Pieza(PIEZAS[randomN][0],PIEZAS[randomN][1],this.tablero); 
    }

    get tablero() {
        return this._tablero;
    }

    get pieza() {
        return this._pieza;
    }

    set pieza(pieza) {
        this._pieza = pieza;
    }

    get comenzarCaer() {
        return this._comenzarCaer;
    }
    set comenzarCaer(comenzarCaer) {
        this._comenzarCaer = comenzarCaer;
    }
    
    caer = () => {
        let ahora = Date.now();
        let delta = ahora - this.comenzarCaer;
        if (delta > this._velocidad) {
            this.pieza.moverAbajo();
            this.comenzarCaer = Date.now();
        }
        if (!this.gameOver) {
            requestAnimationFrame(this.caer);
        }
    }

    control = (event) => {
        if (event.keyCode == 37) {
            this.pieza.moverIzquierda();
            this.caer();
            //this.comenzarCaer = Date.now();
        } else if (event.keyCode == 38) {
            this.pieza.rotar();
            this.caer();
            //this.comenzarCaer = Date.now();
        } else if (event.keyCode == 39) {
            this.pieza.moverDerecha();
            this.caer();
            //this.comenzarCaer = Date.now();
        } else if (event.keyCode == 40) {
            this.pieza.moverAbajo();
        }
    }

}