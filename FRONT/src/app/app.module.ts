import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ClienteAtualizarComponent } from './pages/cliente/cliente-atualizar/cliente-atualizar.component';
import { ClienteCadastrarComponent } from './pages/cliente/cliente-cadastrar/cliente-cadastrar.component';
import { ClienteDeletarComponent } from './pages/cliente/cliente-deletar/cliente-deletar.component';
import { ClienteListarComponent } from './pages/cliente/cliente-listar/cliente-listar.component';

@NgModule({
    declarations: [
      AppComponent,
      ClienteAtualizarComponent,
      ClienteCadastrarComponent,
      ClienteDeletarComponent,
      ClienteListarComponent,
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule {}
