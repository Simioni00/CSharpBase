import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClienteListarComponent } from "./pages/cliente/cliente-listar/cliente-listar.component";

const routes: Routes = [
  {
    path: "",
    component: ClienteListarComponent,
  },
  {
    path:"pages/cliente/cliente-listar",
    component: ClienteListarComponent,
  }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}
