import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClienteListarComponent } from "./pages/cliente/cliente-listar/cliente-listar.component";
import { ClienteCadastrarComponent } from "./pages/cliente/cliente-cadastrar/cliente-cadastrar.component";
import { ClienteAtualizarComponent } from "./pages/cliente/cliente-atualizar/cliente-atualizar.component";
import { ClienteDeletarComponent } from "./pages/cliente/cliente-deletar/cliente-deletar.component";

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
  }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}
