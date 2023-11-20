import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Cliente } from '../../../models/cliente.models';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-atualizar',
  templateUrl: './cliente-atualizar.component.html',
  styleUrls: ['./cliente-atualizar.component.css']
})
export class ClienteAtualizarComponent implements OnInit {
  cliente : Cliente = { clienteId: 0, nome: '' };

  constructor(private http: HttpClient, private _snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
  }

  atualizarCliente(): void {
    this.http.put(`https://localhost:7024/api/cliente/atualizar/${this.cliente.clienteId}`, this.cliente)
      .subscribe({
        next: (clienteAtualizado) => {
          console.log('Cliente atualizado:', clienteAtualizado);
          this._snackBar.open("Cliente atualizado!", "Ok!", {
            horizontalPosition: "right",
            verticalPosition: "top",
          });
          this.router.navigate(["pages/cliente/buscar"]);
        },
        error: (erro) => {
          console.log(erro);
          this._snackBar.open("Erro ao atualizar cliente.", "Ok!", {
            horizontalPosition: "right",
            verticalPosition: "top",
          });
        }
      });
  }
}

