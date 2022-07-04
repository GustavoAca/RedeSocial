import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertaComponent } from '../alerta/alerta.component';

@Injectable({
  providedIn: 'root'
})
export class AlertaService {

  constructor(private bsModalService: BsModalService) { }

  private showAlert(msg: string, type: string){
    const bsModalRef: BsModalRef = this.bsModalService.show(AlertaComponent)
    bsModalRef.content.type = type
    bsModalRef.content.msg = msg
  }

  showAlertDanger(msg: string){
    this.showAlert(msg, 'danger')
  }

  showAlertInfo(msg: string){
    this.showAlert(msg, 'info')
  }

  showAlertSuccess(msg: string){
    this.showAlert(msg, 'success')
  }
}
