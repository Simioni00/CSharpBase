import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import { MatCardModule } from "@angular/material/card";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSnackBarModule } from "@angular/material/snack-bar";


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ClienteAtualizarComponent } from './pages/cliente/cliente-atualizar/cliente-atualizar.component';
import { ClienteCadastrarComponent } from './pages/cliente/cliente-cadastrar/cliente-cadastrar.component';
import { ClienteDeletarComponent } from './pages/cliente/cliente-deletar/cliente-deletar.component';
import { ClienteListarComponent } from './pages/cliente/cliente-listar/cliente-listar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

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
      HttpClientModule,
      FormsModule, 
      BrowserAnimationsModule,
      MatToolbarModule,
      MatButtonModule,
      MatIconModule,
      MatSidenavModule,
      MatListModule,
      MatTableModule,
      MatCardModule,
      MatSelectModule,
      MatInputModule,
      MatFormFieldModule,
      MatSnackBarModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule {}
