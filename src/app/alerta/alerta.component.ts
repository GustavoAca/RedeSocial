import { BsModalRef } from 'ngx-bootstrap/modal';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.css']
})
export class AlertaComponent implements OnInit {

  @Input() msg: string
  @Input() type = 'success'

  constructor(
    public modal: BsModalRef
  ) { }

  ngOnInit() {
  }

  fechar(){
    this.modal.hide()
  }
}
