import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AlertaService } from '../service/alerta.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuario: Usuario = new Usuario;
  senhaConfirmada: string;
  usuarioSelecionado: string;


  constructor(
    private auth: AuthService,
    private alertaService: AlertaService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0);
  }

  padronizarFoto(){
    if(this.usuario.imagemUrl == null){
      this.usuario.imagemUrl = 'https://i.imgur.com/GfDjXmg.png'
    }
  }

  confirmarSenha(event: any){
      this.senhaConfirmada = event.target.value;
  }

  selecionarTipoUsuario(event: any){
    this.usuarioSelecionado = event.target.value;
  }

  cadastrar(){
    this.padronizarFoto()
    this.usuario.tipo = this.usuarioSelecionado;
    if(this.usuario.senha != this.senhaConfirmada) {
      this.alertaService.showAlertDanger('Você digitou senhas diferentes.');
    } else {
      this.auth.cadastrar(this.usuario).subscribe((resp: Usuario) =>{
        this.usuario = resp
        this.router.navigate(['/entrar'])
        this.alertaService.showAlertSuccess('Usuário cadastrado com sucesso!')
      })
    }
}
}
