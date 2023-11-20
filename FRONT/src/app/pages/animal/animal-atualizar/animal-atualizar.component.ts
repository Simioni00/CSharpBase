import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Animal } from '../../../models/animal.models';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animal-atualizar',
  templateUrl: './animal-atualizar.component.html',
  styleUrls: ['./animal-atualizar.component.css']
})
export class AnimalAtualizarComponent implements OnInit {
  animal : Animal = { animalId: 0, nome: '', descricao: '' };

  constructor(private http: HttpClient, private _snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
  }

  atualizarAnimal(): void {
    this.http.put(`https://localhost:7024/api/animal/atualizar/${this.animal.animalId}`, this.animal)
      .subscribe({
        next: (animalAtualizado) => {
          console.log('Animal atualizado:', animalAtualizado);
          this._snackBar.open("Animal atualizado!", "Ok!", {
            horizontalPosition: "right",
            verticalPosition: "top",
          });
          this.router.navigate(["pages/animal/animal-listar"]);
        },
        error: (erro) => {
          console.log(erro);
          this._snackBar.open("Erro ao atualizar animal.", "Ok!", {
            horizontalPosition: "right",
            verticalPosition: "top",
          });
        }
      });
  }
}

