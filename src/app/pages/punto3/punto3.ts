import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InscripcionService } from '../../services/inscripcion.service';

@Component({
  selector: 'app-punto3',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './punto3.html',
  styleUrl: './punto3.css'
})
export class Punto3 {

  inscripcion = {
    dni: '',
    precio: 0,
    categoriaAlumno: '',
    fechaInscripcion: '',
    email: '',
    curso: ''
  };

  totalFinal:number = 0;
    constructor(private inscripcionService:InscripcionService){ }

  calcularTotal(){

    let precio = this.inscripcion.precio;
    let categoria = this.inscripcion.categoriaAlumno;

    if(precio > 0){

      if(categoria == '1'){
        this.totalFinal = precio - (precio * 0.35);
      }
      else if(categoria == '2'){
        this.totalFinal = precio - (precio * 0.50);
      }
      else{
        this.totalFinal = precio;
      }

    }

  }

 registrar(){

  if(
    !this.inscripcion.dni ||
    !this.inscripcion.email ||
    !this.inscripcion.curso ||
    !this.inscripcion.fechaInscripcion ||
    !this.inscripcion.precio ||
    !this.inscripcion.categoriaAlumno
  ){

    alert('Complete todos los campos');

    return;
  }
  let nuevaInscripcion = {
    ...this.inscripcion,
    total: this.totalFinal
  };

  this.inscripcionService.agregarInscripcion(nuevaInscripcion);

  this.limpiarFormulario();

  }
  limpiarFormulario(){

    this.inscripcion = {
      dni: '',
      precio: 0,
      categoriaAlumno: '',
      fechaInscripcion: '',
      email: '',
      curso: ''
    };

    this.totalFinal = 0;
  }

  obtenerInscripciones(){
    return this.inscripcionService.obtenerInscripciones();
  }

  eliminar(index:number){
    this.inscripcionService.eliminarInscripcion(index);
  }

  obtenerNombreCategoria(categoria:string){

    if(categoria == '1'){
      return 'Estudiante';
    }
    else if(categoria == '2'){
      return 'Egresado';
    }
    else{
      return 'Particular';
    }

  }

    totalEstudiantes(){

    return this.obtenerInscripciones()
    .filter(i => i.categoriaAlumno == '1')
    .length;

  }

  totalEgresados(){

    return this.obtenerInscripciones()
    .filter(i => i.categoriaAlumno == '2')
    .length;

  }

  totalParticulares(){

    return this.obtenerInscripciones()
    .filter(i => i.categoriaAlumno == '3')
    .length;

  } 
}