import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Animal } from '../../../models/animal.models';

@Component({
  selector: 'app-animal-listar',
  templateUrl: './animal-listar.component.html',
  styleUrl: './animal-listar.component.css'
})
export class AnimalListarComponent {
    animais : Animal[] = []

    constructor(
      private client: HttpClient){}
  
    ngOnInit() : void{
      console.log("O componente foi carregado!");
  
      this.client.get<Animal[]>("https://localhost:7024/api/animal/encontrar")
        .subscribe({
          //Requisição com sucesso
          next: (animais) => {
            this.animais = animais;
            console.table(animais);
          },
          //Requisição com erro
          error: (erro) => {
            console.log(erro);
          }
        })
    }
}
