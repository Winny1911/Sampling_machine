import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-regulamento-campanha',
  templateUrl: './regulamento-campanha.component.html',
  styleUrls: ['./regulamento-campanha.component.css']
})
export class RegulamentoCampanhaComponent implements OnInit {

  constructor(private router: Router,private activatedRoute:ActivatedRoute) { }
  
  termChecked = false

  goToPolicies(){
    this.router.navigate(['/politica-privacidade', {birthday: this.activatedRoute.snapshot.params.birthday}]);
  }

  ngOnInit(): void {
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
