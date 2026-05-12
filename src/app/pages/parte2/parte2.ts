import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InscripcionService } from '../../services/inscripcion.service';

@Component({
  selector: 'app-parte2',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './parte2.html',
  styleUrl: './parte2.css'
})
export class Parte2 {

  inscripcion = {
    id: 0,
    dni: '',
    precio: 0,
    categoriaAlumno: '',
    fechaInscripcion: '',
    email: '',
    curso: ''
  };

  totalFinal: number = 0;

  constructor(private inscripcionService: InscripcionService) {}

  calcularTotal() {
    let precio = this.inscripcion.precio;
    let categoria = this.inscripcion.categoriaAlumno;
    if (precio > 0) {
      if (categoria == '1') {
        this.totalFinal = precio - (precio * 0.35);
      } else if (categoria == '2') {
        this.totalFinal = precio - (precio * 0.50);
      } else {
        this.totalFinal = precio;
      }
    }
  }

  registrar() {
    if (
      !this.inscripcion.dni ||
      !this.inscripcion.email ||
      !this.inscripcion.curso ||
      !this.inscripcion.fechaInscripcion ||
      !this.inscripcion.precio ||
      !this.inscripcion.categoriaAlumno
    ) {
      alert('Complete todos los campos');
      return;
    }

    let nuevaInscripcion = {
      ...this.inscripcion,
      total: this.totalFinal
    };

    if (this.modoEdicion) {
      this.inscripcionService.actualizarInscripcion(nuevaInscripcion);
      this.modoEdicion = false;
    } else {
      this.inscripcionService.agregarInscripcion(nuevaInscripcion);
    }

    this.limpiarFormulario();
  }

  limpiarFormulario() {
    this.inscripcion = {
      id: 0,
      dni: '',
      precio: 0,
      categoriaAlumno: '',
      fechaInscripcion: '',
      email: '',
      curso: ''
    };
    this.totalFinal = 0;
  }

  obtenerInscripciones() {
    return this.inscripcionService.obtenerInscripciones();
  }

  eliminar(id: number) {
    this.inscripcionService.eliminarInscripcion(id);
  }

  obtenerNombreCategoria(categoria: string) {
    if (categoria == '1') return 'Estudiante';
    else if (categoria == '2') return 'Egresado';
    else return 'Particular';
  }

  totalEstudiantes() {
    return this.obtenerInscripciones()
      .filter(i => i.categoriaAlumno == '1').length;
  }

  totalEgresados() {
    return this.obtenerInscripciones()
      .filter(i => i.categoriaAlumno == '2').length;
  }

  totalParticulares() {
    return this.obtenerInscripciones()
      .filter(i => i.categoriaAlumno == '3').length;
  }

  // ---- Tuyo (Elias) ----
  modoEdicion: boolean = false;
  busqueda: string = '';

  get inscripcionesFiltradas() {
    const texto = this.busqueda.toLowerCase();
    return this.obtenerInscripciones().filter((i: any) =>
      i.dni.toLowerCase().includes(texto) ||
      i.email.toLowerCase().includes(texto) ||
      i.curso.toLowerCase().includes(texto) ||
      this.obtenerNombreCategoria(i.categoriaAlumno).toLowerCase().includes(texto)
    );
  }

  editar(item: any) {
    this.inscripcion = { ...item };
    this.totalFinal = item.total;
    this.modoEdicion = true;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  cancelarEdicion() {
    this.limpiarFormulario();
    this.modoEdicion = false;
  }

  totalGeneral() {
    return this.obtenerInscripciones()
      .reduce((sum: number, i: any) => sum + i.total, 0);
  }
}