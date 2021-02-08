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

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToRules(){
    this.router.navigate(['/regulamento', {birthday: this.birthday.toISOString()}]);
  }

}
