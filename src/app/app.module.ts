import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { ContatoComponent } from './views/contato/contato.component';
import { HeaderComponent } from './views/header/header.component';
import { FooterComponent } from './views/footer/footer.component';
import { LoginComponent } from './views/login/login.component';
import { FormsModule } from '@angular/forms';
import { ProdutosComponent } from './views/produtos/produtos.component';
import { HttpClientModule } from '@angular/common/http';
import { JogosComponent } from './views/jogos/jogos.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContatoComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ProdutosComponent,
    JogosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
