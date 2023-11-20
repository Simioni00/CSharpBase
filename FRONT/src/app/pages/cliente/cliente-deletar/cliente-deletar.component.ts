import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar } from "@angular/material/snack-bar";
import { Cliente } from '../../../models/cliente.models';

@Component({
  selector: 'app-cliente-deletar',
  templateUrl: './cliente-deletar.component.html',
  styleUrls: ['./cliente-deletar.component.css']
})
export class ClienteDeletarComponent implements OnInit {
  id!: number;
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

  deletar(): void {
    this.http
      .delete("https://localhost:7024/api/cliente/deletar/" + this.id)
      .subscribe({
        next: () => {
          this._snackBar.open("Cliente deletado!", "Ok!", {
            horizontalPosition: "right",
            verticalPosition: "top",
          });
          this.router.navigate(["pages/cliente/buscar"]);
        },
        error: (error) => {
          console.error("Erro ao deletar cliente:", error);
          this._snackBar.open("Erro ao deletar cliente.", "Ok!", {
            horizontalPosition: "right",
            verticalPosition: "top",
          });
        },
      });
  }
}

