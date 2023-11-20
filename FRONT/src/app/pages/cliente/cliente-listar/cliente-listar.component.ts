import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Cliente } from '../../../models/cliente.models';

@Component({
  selector: 'app-cliente-listar',
  templateUrl: './cliente-listar.component.html',
  styleUrl: './cliente-listar.component.css'
})
export class ClienteListarComponent {
  clientes : Cliente[] = []

  constructor(
    private client: HttpClient){}

  ngOnInit() : void{
    console.log("O componente foi carregado!");

    this.client.get<Cliente[]>("https://localhost:7024/api/cliente/buscar")
      .subscribe({
        //Requisição com sucesso
        next: (clientes) => {
          this.clientes = clientes;
          console.table(clientes);
        },
        //Requisição com erro
        error: (erro) => {
          console.log(erro);
        }
      })
  }
}

