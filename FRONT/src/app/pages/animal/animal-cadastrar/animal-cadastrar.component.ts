import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar } from "@angular/material/snack-bar";
import { Animal } from '../../../models/animal.models';

@Component({
  selector: 'app-animal-cadastrar',
  templateUrl: './animal-cadastrar.component.html',
  styleUrls: ['./animal-cadastrar.component.css']
})
export class AnimalCadastrarComponent implements OnInit {
  id!: number;
  nome!: string;
  descricao!: string;
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

  cadastrar(): void {
    let animal: Animal = {
      nome: this.nome,
      descricao: this.descricao,
      animalId: 0
    };

    this.http
      .post<Animal>("https://localhost:7024/api/animal/cadastrar", animal)
      .subscribe({
        next: (animal) => {
          this._snackBar.open("Animal cadastrado!", "Ok!", {
            horizontalPosition: "right",
            verticalPosition: "top",
          });
          this.router.navigate(["pages/animal/animal-listar"]);
        },
        error: (error) => {
          console.error("Erro ao cadastrar animal:", error);
          this._snackBar.open("Erro ao cadastrar animal.", "Ok!", {
            horizontalPosition: "right",
            verticalPosition: "top",
          });
        },
      });
  }
}
