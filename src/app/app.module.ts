// dependencias
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule, MAT_DATE_FORMATS, NativeDateModule} from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

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




const routes: Routes = [
  {
    path: '',
    component: PaginaInicialComponent  
  },
  {
    path: 'NaoAceite',
    component: AceiteNaoComponent
  },

  {
    path: 'Cadastro',
    component: CadastroIdentificacaoComponent
  },

  {
    path: 'Encerramento',
    component: EncerramentoComponent
  },

   {
    path: 'Token',
    component: EnvioTokenComponent
  },

  {
    path: 'Ligacao',
    component: LigacaoComponent
  },

   {
    path: 'PoliticaPrivacidade',
    component: PoliticaPrivacidadeComponent
  },

  {
    path: 'Regulamento',
    component: RegulamentoCampanhaComponent
  },

  {
    path: 'TelaEspera',
    component: TelaDesktopAtendenteEsperaComponent
  },

  {
    path: 'AcessoToken',
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
    RouterModule,
    FormsModule,
    BrowserModule,
    CommonModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    NativeDateModule,
    BrowserModule, 
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule 
  ],

  providers: [

    {provide: LocationStrategy, useClass: HashLocationStrategy},
   
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
