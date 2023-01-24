import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Trabajador } from '../Modelos/trabajador';
import { TrabajadorService } from '../Servicios/trabajador.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {
cliente!:Trabajador;
constructor(private rutaActiva:ActivatedRoute, private clienteServicio:TrabajadorService){}
ngOnInit(){
  let id = this.rutaActiva.snapshot.params["id"];
  this.cliente=this.clienteServicio.getTrabajador(id);
}
}
