import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-politica-privacidade',
  templateUrl: './politica-privacidade.component.html',
  styleUrls: ['./politica-privacidade.component.css']
})
export class PoliticaPrivacidadeComponent implements OnInit {

  constructor(private router: Router, private activatedRoute:ActivatedRoute) { }

  termChecked = false

  ngOnInit(): void {
  }

  goToRegister(){
    this.router.navigate(['/cadastro', {birthday: this.activatedRoute.snapshot.params.birthday}]);
  }

  check(){
    console.log(this.termChecked)
    if(this.termChecked){
      this.termChecked = false
    }else{
      this.termChecked = true
    }
  }

}
