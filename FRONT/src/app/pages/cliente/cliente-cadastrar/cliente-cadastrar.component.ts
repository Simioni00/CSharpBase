import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar } from "@angular/material/snack-bar";
import { Cliente } from '../../../models/cliente.models';

@Component({
  selector: 'app-cliente-cadastrar',
  templateUrl: './cliente-cadastrar.component.html',
  styleUrls: ['./cliente-cadastrar.component.css']
})
export class ClienteCadastrarComponent implements OnInit {
  id!: number;
  nome!: string;
  clientes: Cliente[] = [];

  constructor(
    private http: HttpClient,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.http
      .get<Cliente[]>("https://localhost:7024/api/cliente/buscar")
      .subscribe({
        next: (clientes) => {
          this.clientes = clientes;
        },
        error: (error) => {
          console.error("Erro ao buscar clientes:", error);
        },
      });
  }

  cadastrar(): void {
    let cliente: Cliente = {
      nome: this.nome,
      clienteId: 0
    };

    this.http
      .post<Cliente>("https://localhost:7024/api/cliente/cadastrar", cliente)
      .subscribe({
        next: (cliente) => {
          this._snackBar.open("Cliente cadastrado!", "Ok!", {
            horizontalPosition: "right",
            verticalPosition: "top",
          });
          this.router.navigate(["pages/cliente/buscar"]);
        },
        error: (error) => {
          console.error("Erro ao cadastrar cliente:", error);
          this._snackBar.open("Erro ao cadastrar cliente.", "Ok!", {
            horizontalPosition: "right",
            verticalPosition: "top",
          });
        },
      });
  }
}
