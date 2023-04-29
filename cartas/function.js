class Carta {
    constructor(valor, simbolo){
        this.valor = valor;
        this.simbolo = simbolo;
    }
}

class Baraja {
    constructor() {
        this.cartas = [];
    }

    crearBaraja() {
        const valores = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
        const simbolos = ["Corazones", "Diamantes", "Tréboles", "Picas"];

        for (let simbolo of simbolos) {
            for (let valor of valores) {
                this.cartas.push(new Carta(valor, simbolo));
            }
        }
    }

    barajar() {
        for(let i = this.cartas.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cartas[i], this.cartas[j]] = [this.cartas[j], this.cartas[i]];
        }
    }

    repartirCarta() {
        return this.cartas.pop();
    }

    mostrarBaraja() {
        console.log(this.cartas);
    }
}

class Jugador {
    constructor(nombre) {
        this.nombre = nombre;
        this.mano = [];
    }

    tomarCarta(carta) {
        this.mano.push(carta);
    }

    jugarCarta(carta) {
        const index = this.mano.indexOf(carta);
        if (index !== -1) {
            const cartaJugada = this.mano.splice(index, 1)[0];
            console.log(`${this.nombre} juega la carta: ${cartaJugada.valor} de ${cartaJugada.simbolo}`);
            return cartaJugada;
        } else {
            console.log("La carta no está en la mano del jugador.");
        }
    }

    comprobarGanador() {
        return this.mano.length === 0;
    }
}


const baraja = new Baraja();
const jugador1 = new Jugador("Jugador 1");
const jugador2 = new Jugador("Jugador 2");

// Juego
baraja.crearBaraja();
baraja.barajar();

for (let i = 0; i < 5; i++) {
    jugador1.tomarCarta(baraja.repartirCarta());
    jugador2.tomarCarta(baraja.repartirCarta());
}

jugador1.jugarCarta(jugador1.mano[0]);
jugador2.jugarCarta(jugador2.mano[0]);

console.log("Cartas restantes en la baraja:");
baraja.mostrarBaraja();

console.log("Mano del Jugador 1:");
console.log(jugador1.mano);

console.log("Mano del Jugador 2:");
console.log(jugador2.mano);

console.log("¿El Jugador 1 ha ganado?", jugador1.comprobarGanador());
console.log("¿El Jugador 2 ha ganado?", jugador2.comprobarGanador());