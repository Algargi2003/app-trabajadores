import { Component } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {
  clientes:Array<string>=[
    "Alvaro", "Hector", "Ivan", "Pepe", "Pedro"
  ]
}
