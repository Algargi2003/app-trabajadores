import { Component } from '@angular/core';
import { Trabajador } from '../Modelos/trabajador';
import { TrabajadorService } from '../Servicios/trabajador.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {
  clientes:Array<Trabajador>=[];
  constructor(private servicioClientes:TrabajadorService){}
  ngOnInit(){
    this.clientes=this.servicioClientes.getTrabajadores();
  }
  verCliente(){

  }
}
