import { Injectable } from '@angular/core';
import { Trabajador } from '../Modelos/trabajador';

@Injectable({
  providedIn: 'root',
})
export class TrabajadorService {
  constructor() {}

  //declarar la variable titulo

  //declarar la variable trabajadores array del tipo Trabajador
  trabajadores:Array<Trabajador>=
    [
      {
        id:1,
        nombre: 'Ana',
        cargo: 'Programadora' ,
        foto:'1.jpg',
        votos:0
      },
      {
        id:2,
        nombre: 'Elena',
        cargo: 'Administrativa',
        foto:'2.jpg',
        votos:0
      },
      {
        id:3,
        nombre: 'Juan',
        cargo: 'Analista' ,
        foto:'3.jpg',
        votos:0
      },
      {
        id:4,
        nombre: 'Luis',
        cargo: 'Programador' ,
        foto:'4.jpg',
        votos:0
      },
      {
        id:5,
        nombre: 'Maria',
        cargo: 'Diseñadora' ,
        foto:'5.jpg',
        votos:0
      },
      {
        id:6,
        nombre: 'Pedro',
        cargo: 'Marketing' ,
        foto:'6.jpg',
        votos:0
      }
   ];
   getTrabajadores(){
    return this.trabajadores;
   }

  // metodo para borrar el trabajador pasado por id del array de trabajadores
  borrar(id: number) {
    let trabajador = this.trabajadores.findIndex(e=>e.id==id);
    this.trabajadores.splice(trabajador,1);
  }

  // metodo para sumar un voto al trabajador pasado por id
  sumaVoto(id: number) {
    let trabajador = this.trabajadores.findIndex(e=>e.id==id);
    this.trabajadores[trabajador].votos++;
  }

  // metodo para restar un voto al trabajador pasado por id
  restaVoto(id: number) {
    let trabajador = this.trabajadores.findIndex(e=>e.id==id);
    if(this.trabajadores[trabajador].votos>0){
      this.trabajadores[trabajador].votos--;
    }else{
      alert("No hace falta que tenga votos negativos");
    }

  }
}
