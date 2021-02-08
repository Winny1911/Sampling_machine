import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CadastroIdentificacaoService {

  
  constructor(private http: HttpClient, private router: Router) { 
  } 

  registerConsumer(consumer): Promise<any>{
    return this.http.post(environment.apiBaseUrl + "/api/dev/consumidor", consumer).toPromise();
  }

}
