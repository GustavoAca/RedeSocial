import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { AlertaService } from '../service/alerta.service';
import { AuthService } from '../service/auth.service';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-usuario-editar',
  templateUrl: './usuario-editar.component.html',
  styleUrls: ['./usuario-editar.component.css']
})
export class UsuarioEditarComponent implements OnInit {

  usuario: Usuario = new Usuario()
  idUsuario: number
  senhaDigitada: string
  tipoUsuario: string

  constructor(
    private authService: AuthService,
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router,
    private alertaService: AlertaService
  ) { }

  ngOnInit() {
    window.scroll(0, 0)

    if (environment.token == '') {
      this.router.navigate(['/entrar'])
    }

    this.idUsuario = this.route.snapshot.params['id']
    this.findByIdUsuario(this.idUsuario)
  }

  confirmarSenha(event: any) {
    this.senhaDigitada = event.target.value
  }

  selecionarTipoUsuario(event: any) {
    this.tipoUsuario = event.target.value
  }

  atualizar() {
    this.usuario.postagem = []

    if (this.usuario.senha != this.senhaDigitada) {
      this.alertaService.showAlertDanger('Senhas digitadas estão diferentes')
    } else {
      this.usuarioService.putUsuario(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp
        this.router.navigate(['/signin'])
        this.alertaService.showAlertSuccess('Usuário atualizado. Faça o login novamente para ver as alterações.')
        environment.token = ''
        environment.nome = ''
        environment.imagemUrl = ''
        environment.usuarioId = 0

        this.router.navigate(['/entrar'])
      })
    }
  }

  findByIdUsuario(id: number) {
    this.authService.getByIdUsuario(id).subscribe((resp: Usuario) => {
      this.usuario = resp
      this.usuario.senha = ""
    })
  }

}
