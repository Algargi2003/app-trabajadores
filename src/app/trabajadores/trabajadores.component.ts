import { Component } from '@angular/core';
import { Trabajador } from '../Modelos/trabajador';
import { TrabajadorService } from '../Servicios/trabajador.service';

@Component({
  selector: 'app-trabajadores',
  templateUrl: './trabajadores.component.html',
  styleUrls: ['./trabajadores.component.css']
})
export class TrabajadoresComponent {
  titulo="Lista Trabajadores";
  trabajadores:Array<Trabajador>=[];

  constructor(private trabajadoresService:TrabajadorService){}

  ngOnInit(){
    this.trabajadores = this.trabajadoresService.getTrabajadores();
    console.log(this.trabajadores);
  }

  like(id:number){
    this.trabajadoresService.sumaVoto(id);
  }
  unlike(id:number){
    this.trabajadoresService.restaVoto(id);
  }
  borra(id:number){
    this.trabajadoresService.borrar(id);
  }
}
