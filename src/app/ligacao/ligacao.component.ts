import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-ligacao',
  templateUrl: './ligacao.component.html',
  styleUrls: ['./ligacao.component.css']
})
export class LigacaoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToFinish(){
    this.router.navigate(['/encerramento']);
  }

}
