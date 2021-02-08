// dependencias
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask'

//Pages 
 import { AppComponent } from './app.component';
 import { AceiteNaoComponent } from './aceite-nao/aceite-nao.component';
 import { CadastroIdentificacaoComponent } from './cadastro-identificacao/cadastro-identificacao.component';
 import { EncerramentoComponent } from './encerramento/encerramento.component';
 import { EnvioTokenComponent } from './envio-token/envio-token.component';
 import { LigacaoComponent } from './ligacao/ligacao.component';
 import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
 import { PoliticaPrivacidadeComponent } from './politica-privacidade/politica-privacidade.component';
 import { RegulamentoCampanhaComponent } from './regulamento-campanha/regulamento-campanha.component';
 import { TelaDesktopAtendenteEsperaComponent } from './tela-desktop-atendente-espera/tela-desktop-atendente-espera.component';
 import { TokenAcessoComponent } from './token-acesso/token-acesso.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: PaginaInicialComponent  
  },
  {
    path: 'nao-aceite',
    component: AceiteNaoComponent
  },

  {
    path: 'cadastro',
    component: CadastroIdentificacaoComponent
  },

  {
    path: 'encerramento',
    component: EncerramentoComponent
  },

   {
    path: 'token',
    component: EnvioTokenComponent
  },

  {
    path: 'ligacao',
    component: LigacaoComponent
  },

   {
    path: 'politica-privacidade',
    component: PoliticaPrivacidadeComponent
  },

  {
    path: 'regulamento',
    component: RegulamentoCampanhaComponent
  },

  {
    path: 'tela-espera',
    component: TelaDesktopAtendenteEsperaComponent
  },

  {
    path: 'acesso-token',
    component: TokenAcessoComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
     AceiteNaoComponent,
     CadastroIdentificacaoComponent,
     EncerramentoComponent,
     EnvioTokenComponent,
     LigacaoComponent,
     PaginaInicialComponent,
     PoliticaPrivacidadeComponent,
     RegulamentoCampanhaComponent,
     TelaDesktopAtendenteEsperaComponent,
     TokenAcessoComponent
  ],

  imports: [
    RouterModule.forRoot(routes),
    NgxMaskModule.forRoot(),
    RouterModule,
    FormsModule,
    BrowserModule,
    CommonModule,
    MatInputModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule, 
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    BrowserModule, 
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatInputModule,
    HttpClientModule
    
  ],

  providers: [

    {provide: LocationStrategy, useClass: HashLocationStrategy},
   
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
