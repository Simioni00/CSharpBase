import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar } from "@angular/material/snack-bar";
import { Animal } from '../../../models/animal.models';

@Component({
  selector: 'app-animal-deletar',
  templateUrl: './animal-deletar.component.html',
  styleUrls: ['./animal-deletar.component.css']
})
export class AnimalDeletarComponent implements OnInit {
  id!: number;
  animais: Animal[] = [];

  constructor(
    private http: HttpClient,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.http
      .get<Animal[]>("https://localhost:7024/api/animal/encontrar")
      .subscribe({
        next: (animais) => {
          this.animais = animais;
        },
        error: (error) => {
          console.error("Erro ao buscar animais:", error);
        },
      });
  }

  deletarPorId(): void {
    this.http
      .delete("https://localhost:7024/api/animal/deletar/" + this.id)
      .subscribe({
        next: () => {
          this._snackBar.open("Animal deletado!", "Ok!", {
            horizontalPosition: "right",
            verticalPosition: "top",
          });
          this.router.navigate(["pages/animal/animal-listar"]);
        },
        error: (error) => {
          console.error("Erro ao deletar animal:", error);
          this._snackBar.open("Erro ao deletar animal.", "Ok!", {
            horizontalPosition: "right",
            verticalPosition: "top",
          });
        },
      });
  }
}

