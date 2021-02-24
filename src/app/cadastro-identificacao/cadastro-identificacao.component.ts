import { Component, OnInit } from '@angular/core';
import { CadastroIdentificacaoService} from './cadastro-identificacao.service'
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-cadastro-identificacao',
  templateUrl: './cadastro-identificacao.component.html',
  styleUrls: ['./cadastro-identificacao.component.css']
})
export class CadastroIdentificacaoComponent implements OnInit {

  constructor(private cadastroIdentificacaoService: CadastroIdentificacaoService, private httpClient:HttpClient, private router: Router, private activatedRoute:ActivatedRoute ) { 
  } 

  message = ""
  errorMessage = ""

  consumer = {
    "nome": "",
    "nascimento": "",
    "email": "",
    "telefone": ""
  }

  ngOnInit(): void {
    this.consumer.nascimento = this.activatedRoute.snapshot.params.birthday
  }

  registerConsumer(){

    this.errorMessage = ""

    if(this.consumer.nome.length == 0 || this.consumer.email.length == 0 || this.consumer.telefone.length == 0){
      this.errorMessage = "Todos os campos são obrigatórios"
    }else if(!this.phoneValid() && !this.emailValid()){
      this.errorMessage = "Formato de telefone e e-mail inválidos."    
    }else if(!this.phoneValid() && this.emailValid()){
      this.errorMessage = "Formato de telefone inválido."    
    }else if(!this.emailValid() && this.phoneValid()){
      this.errorMessage = "Formato de e-mail inválido."    
    }else{
      this.consumer.telefone = this.consumer.telefone.toString()
      this.cadastroIdentificacaoService.registerConsumer(this.consumer).then((response: any) => { 
        this.router.navigate(['/encerramento', {token: response.conteudo.tokenGerado}]);
      }).catch((error:any) => {
        console.log(error)
        this.errorMessage = "Erro!"
      })
    }
  }

  phoneValid(){
    var phoneRegex = /^\(?([0-9]{2})\)?([0-9]{5})([0-9]{4})$/;
    if(String(this.consumer.telefone).match(phoneRegex)){
      return true
    }else{
      return false
    }
  }

  emailValid(){
    var emailRegex = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/;
    if(String(this.consumer.email).match(emailRegex)){
      return true
    }else{
      return false
    }
  }
}
