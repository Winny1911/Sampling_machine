// dependencias
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask'
import { SafeResourceUrl } from '@angular/platform-browser';
//Pages 
 import { AppComponent } from './app.component';
 import { CadastroIdentificacaoComponent } from './cadastro-identificacao/cadastro-identificacao.component';
 import { EncerramentoComponent } from './encerramento/encerramento.component';
 import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
 import { PoliticaPrivacidadeComponent } from './politica-privacidade/politica-privacidade.component';
 import { RegulamentoCampanhaComponent } from './regulamento-campanha/regulamento-campanha.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { QRCodeModule } from 'angularx-qrcode';

const routes: Routes = [
  {
    path: '',
    component: PaginaInicialComponent  
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
    path: 'politica-privacidade',
    component: PoliticaPrivacidadeComponent
  },

  {
    path: 'regulamento',
    component: RegulamentoCampanhaComponent
  }
 
]

@NgModule({
  declarations: [
    AppComponent,     
     CadastroIdentificacaoComponent,
     EncerramentoComponent,     
     PaginaInicialComponent,
     PoliticaPrivacidadeComponent,
     RegulamentoCampanhaComponent     
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
    HttpClientModule,
    QRCodeModule    
  ],

  providers: [

    {provide: LocationStrategy, useClass: HashLocationStrategy},
   
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
