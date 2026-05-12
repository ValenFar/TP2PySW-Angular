import { Component } from '@angular/core';

@Component({
  selector: 'app-punto1',
  imports: [],
  templateUrl: './punto1.html',
  styleUrl: './punto1.css',
})
export class Punto1 {
  // array del carrusel
  diapositivas = [
    {
      imagen: '/img/punto1/Casa-Rosada-Argentina-1280x720.webp',
      titulo: 'Argentina',
      descripcion: 'Argentina es el segundo país más grande de Sudamérica. La Casa Rosada, sede del presidente, debe su color rosa a una mezcla de pintura blanca y sangre de vaca, una práctica común en el siglo XIX.'
    },
    {
      imagen: '/img/punto1/Chile-01-rjsg0jcc5jz24q4moi4310iy69vc0wtfhqf7tpschs.webp',
      titulo: 'Chile',
      descripcion: 'Chile es el país más largo del mundo con 6,435 km de norte a sur, pero solo 177 km de ancho en promedio. Es el único país latinoamericano que limita al norte con desierto y al sur con glaciares antárticos.'
    },
    {
      imagen: '/img/punto1/What-the-changing-business-and-human-rights-legal-landscape-means-for-businesses-in-Brazil.webp',
      titulo: 'Brasil',
      descripcion: 'Brasil es el país más grande de América Latina y alberga el 60% de la selva amazónica. Produce más del 90% del café mundial y es el único país de Sudamérica que habla portugués.'
    }
  ];

  // guarda la posición actual
  indiceActual: number = 0;

  siguiente() {
    if (this.indiceActual < this.diapositivas.length - 1) {
      this.indiceActual++;
    } else {
      this.indiceActual = 0; // vuelve al principio si llega al final
    }
  }

  anterior() {
    if (this.indiceActual > 0) {
      this.indiceActual--;
    } else {
      this.indiceActual = this.diapositivas.length - 1; // va a la ultima si esta en la primera
    }
  }
}
