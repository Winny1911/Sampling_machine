import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})
export class PaginaInicialComponent implements OnInit {

  birthday : Date;
  messageError = ""

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToRules(){
    if(this.isOlder())
      this.router.navigate(['/regulamento', {birthday: this.birthday.toISOString()}]);
    else
      this.messageError = "Idade não corresponde a promoção."
  }

  isOlder() {
    var day = this.birthday.getDay()
    var month = this.birthday.getMonth()
    var year = this.birthday.getFullYear()
    return new Date(year+18, month-1, day) <= new Date();
  }
}
