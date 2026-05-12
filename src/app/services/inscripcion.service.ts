import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InscripcionService {

  private storageKey = 'inscripciones';

  obtenerInscripciones(): any[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  private guardar(lista: any[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(lista));
  }

  agregarInscripcion(inscripcion: any): void {
    const lista = this.obtenerInscripciones();
    inscripcion.id = Date.now();
    lista.push(inscripcion);
    this.guardar(lista);
  }

  eliminarInscripcion(id: number): void {
    const lista = this.obtenerInscripciones().filter((i: any) => i.id !== id);
    this.guardar(lista);
  }

  actualizarInscripcion(actualizada: any): void {
    const lista = this.obtenerInscripciones().map((i: any) =>
      i.id === actualizada.id ? actualizada : i
    );
    this.guardar(lista);
  }
}