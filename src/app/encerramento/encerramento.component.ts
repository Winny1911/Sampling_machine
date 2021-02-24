import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-encerramento',
  templateUrl: './encerramento.component.html',
  styleUrls: ['./encerramento.component.css']
})
export class EncerramentoComponent implements OnInit {

  public myAngularxQrCode: string = null;

  constructor(private activatedRoute:ActivatedRoute) { 
    this.myAngularxQrCode = this.activatedRoute.snapshot.params.token
  }

  ngOnInit(): void {
  }

}
