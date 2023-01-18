import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Trabajador } from '../Modelos/trabajador';

@Component({
  selector: 'app-card-trabajador',
  templateUrl: './card-trabajador.component.html',
  styleUrls: ['./card-trabajador.component.css']
})
export class CardTrabajadorComponent implements OnInit{
  // decorador input para el trabajador que se le pasa desde el padre
  @Input() trabajador!:Trabajador;
  // decxorador output para el evento likeTrabajador
  @Output() likeDesdeHijo = new EventEmitter<number>();
  // decxorador output para el evento unlikeTrabajador
  @Output() unlikeDesdeHijo = new EventEmitter<number>();
  // decxrador output para el evento borraTrabajador
  @Output() borraDesdeHijo = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  //metodo que recibe un trabajador y emite el evento likeTrabajador con el id del trabajador
  like(id:number){
    this.likeDesdeHijo.emit(id)
  }

  //metodo que recibe un trabajador y emite el evento unlikeTrabajador con el id del trabajador
  unlike(id:number){
    this.unlikeDesdeHijo.emit(id)
  }

  //metodo que recibe un trabajador y emite el evento borraTrabajador con el id del trabajador
  eliminar(id:number){
    this.borraDesdeHijo.emit(id);
  }
}
