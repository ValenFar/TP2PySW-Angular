
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importante para usar *ngIf y *ngFor

// Definimos cómo va a ser cada carta
interface Carta {
  id: number;
  imagen: string;
  descubierta: boolean;
  emparejada: boolean;
}

@Component({
  selector: 'app-punto3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './punto3.html',
  styleUrl: './punto3.css',
})

export class Punto3 {

// Variables principales del juego
  tablero: Carta[] = [];
  intentosRestantes: number = 10; // "XX intentos", podés definir cuántos son
  juegoIniciado: boolean = false;
  cartasSeleccionadas: Carta[] = []; // Guarda las 2 cartas que volteamos para comparar
  
  // Lista de las 6 imágenes distintas para las parejas
  imagenesBase = [
    '/img/punto3/carta1.webp', 
    '/img/punto3/carta2.webp',
    '/img/punto3/carta3.webp',
    '/img/punto3/carta4.webp',
    '/img/punto3/carta5.webp',
    '/img/punto3/carta6.webp'
  ];

  // Imagen neutral para el reverso
  imagenOculta: string = '/img/punto3/carta_oculta.webp';

  constructor() {
    this.generarTablero();
  }

  // --- MÉTODOS DEL JUEGO ---

  generarTablero() {
    let cartasTemp: any[] = [];
    
    // 1. Duplicamos las 6 imágenes para formar las 6 parejas (12 cartas en total)
    this.imagenesBase.forEach((img, index) => {
      // Metemos la primera carta de la pareja
      cartasTemp.push({ id: index * 2, imagen: img, descubierta: false, emparejada: false });
      // Metemos la carta gemela
      cartasTemp.push({ id: (index * 2) + 1, imagen: img, descubierta: false, emparejada: false });
    });

    // 2. Mezclamos el arreglo aleatoriamente (Shuffle)
    this.tablero = cartasTemp.sort(() => Math.random() - 0.5);
  }

  iniciarJuego() {
    this.juegoIniciado = true;
    this.intentosRestantes = 10;
    this.generarTablero();
  }

  reiniciarJuego() {
    this.juegoIniciado = false;
    this.generarTablero();
    // Volver a tapar todas las cartas
  }

  // Cartas del juego de memoria

  // Lógica principal:
    // 1. Verificar que el juego esté iniciado.
    // 2. No hacer nada si la carta ya está descubierta o emparejada.
    // 3. Voltear la carta.
    // 4. Si hay 2 cartas volteadas, habilitar el botón "INTENTAR" para compararlas.

  seleccionarCarta(carta: any) {
    //  Si el juego no inició, o si ya seleccionó 2 cartas, bloqueamos el clic
    if (!this.juegoIniciado || this.cartasSeleccionadas.length >= 2) {
      return;
    }

    //  Si la carta ya está volteada o ya encontró a su pareja, no hacemos nada
    if (carta.descubierta || carta.emparejada) {
      return;
    }

    //  Descubrimos la carta y la guardamos en la "memoria" temporal del turno
    carta.descubierta = true;
    this.cartasSeleccionadas.push(carta);
  }

  // Comparamos las 2 cartas seleccionadas para ver si son pareja o no

intentarMatch() {
    // Si por algún motivo no hay 2 cartas, salimos
    if (this.cartasSeleccionadas.length !== 2) {
      return;
    }

    // Guardamos las dos cartas en variables para que sea más fácil leer
    const carta1 = this.cartasSeleccionadas[0];
    const carta2 = this.cartasSeleccionadas[1];

    // ¿Son iguales? Comparamos la ruta de su imagen
    if (carta1.imagen === carta2.imagen) {
      // ¡Acierto! Quedan emparejadas para siempre
      carta1.emparejada = true;
      carta2.emparejada = true;
      
      // Chequeamos si con esto descubrió todo el tablero
      this.verificarVictoria();
    } else {
      // ¡Fallo! Las volvemos a tapar y restamos un intento
      carta1.descubierta = false;
      carta2.descubierta = false;
      this.intentosRestantes--;

      // --- AQUÍ AGREGAMOS LA LÓGICA DE DERROTA ---
      if (this.intentosRestantes === 0) {
        setTimeout(() => {
          alert('¡Game Over! Te quedaste sin intentos. ¡Intentalo de nuevo!');
          this.juegoIniciado = false; // Detenemos el juego
        }, 300);
      }
    }

    // Al final del turno, vaciamos la mano para poder elegir otras dos
    this.cartasSeleccionadas = [];
  }

  // Verifica si el jugador ganó y muestra un mensaje de felicitaciones

  verificarVictoria() {
    // Revisa si CADA carta en el tablero tiene 'emparejada' en true
    const todasEmparejadas = this.tablero.every(c => c.emparejada === true);
    
    if (todasEmparejadas) {
      // Usamos un setTimeout chiquito para que alcance a mostrarse la imagen antes del alert
      setTimeout(() => {
        alert('¡Felicitaciones, Crack! Descubriste todas las parejas.');
        this.juegoIniciado = false;
      }, 300); 
    }
  }
}

