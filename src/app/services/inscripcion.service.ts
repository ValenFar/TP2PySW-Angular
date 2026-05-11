import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InscripcionService {

  inscripciones:any[] = [];

  agregarInscripcion(inscripcion:any){
    this.inscripciones.push(inscripcion);
  }

  obtenerInscripciones(){
    return this.inscripciones;
  }

  eliminarInscripcion(index:number){
    this.inscripciones.splice(index,1);
  }

}