import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClienteListarComponent } from "./pages/cliente/cliente-listar/cliente-listar.component";
import { ClienteCadastrarComponent } from "./pages/cliente/cliente-cadastrar/cliente-cadastrar.component";
import { ClienteAtualizarComponent } from "./pages/cliente/cliente-atualizar/cliente-atualizar.component";
import { ClienteDeletarComponent } from "./pages/cliente/cliente-deletar/cliente-deletar.component";
import { AnimalAtualizarComponent } from "./pages/animal/animal-atualizar/animal-atualizar.component";
import { AnimalCadastrarComponent } from "./pages/animal/animal-cadastrar/animal-cadastrar.component"; 
import { AnimalDeletarComponent } from "./pages/animal/animal-deletar/animal-deletar.component";
import { AnimalListarComponent } from "./pages/animal/animal-listar/animal-listar.component";

const routes: Routes = [
  {
    path: "",
    component: ClienteListarComponent,
  },
  {
    path:"pages/cliente/cliente-listar",
    component: ClienteListarComponent,
  },
  {
    path: "pages/cliente/cliente-cadastrar",
    component: ClienteCadastrarComponent,
  },
  {
    path: "pages/cliente/cliente-atualizar",
    component: ClienteAtualizarComponent,
  },
  {
    path: "pages/cliente/cliente-deletar",
    component: ClienteDeletarComponent,
  },
  {
    path: "pages/animal/animal-atualizar",
    component: AnimalAtualizarComponent,
  },
  {
    path: "pages/animal/animal-cadastrar",
    component: AnimalCadastrarComponent,
  },
  {
    path: "pages/animal/animal-deletar",
    component: AnimalDeletarComponent,
  },
  {
    path: "pages/animal/animal-listar",
    component: AnimalListarComponent,
  }

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}
