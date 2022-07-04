import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';
import { Postagem } from '../model/Postagem';
import { PostagemService } from '../service/postagem.service';
import { Router } from '@angular/router';
import { TemaService } from '../service/tema.service';
import { AuthService } from '../service/auth.service';
import { AlertaService } from '../service/alerta.service';


@Component({
  selector: 'app-botao-postagem',
  templateUrl: './botao-postagem.component.html',
  styleUrls: ['./botao-postagem.component.css']
})
export class BotaoPostagemComponent implements OnInit {

  display = 'none'
  mostra = false;
  opacity = "1"

  usuario: Usuario = new Usuario()
  idUsuario = environment.usuarioId

  tema: Tema = new Tema()
  listaTema: Tema[]
  idTema: number

  postagem: Postagem = new Postagem()
  listaPostagem: Postagem[]

  admin = environment.tipo


  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private temaService: TemaService,
    private authService: AuthService,
    private alertaService: AlertaService
    ) { }

  ngOnInit() {
    if (environment.token == '') {
      this.alertaService.showAlertInfo('Sua sessão expirou, faça o login novamente');
      this.router.navigate(['/entrar']);
    }

    this.authService.refreshToken();
    this.getAllTemas();
    this.opacidade();
  }

  opacidade() {
    if (this.display == "none") {
      this.opacity = "0"
    } else {
      this.opacity = "1"
    }
  }

  mostrarBotao() {
    this.mostra = true
    this.display = "block"
  }

  ocultarBotao() {
    this.mostra = false
    this.display = "none"
  }

  escolherModoVisibilidadeBotao() {
    if (this.display == "block") {
      this.ocultarBotao()
    } else {
      this.mostrarBotao()
    }
    this.opacidade()
  }

  getAllTemas() {
    this.temaService.getAllTema().subscribe({
      next: (resp: Tema[]) => {
        this.listaTema = resp
      }
    })
  }

  findByIdTema() {
    this.temaService.getByIdTema(this.idTema).subscribe({
      next: (resp: Tema) => {
        this.tema = resp
      },
    })
  }

  findByIdUser() {
    this.authService.getByIdUsuario(this.idUsuario).subscribe({
      next: (resp: Usuario) => {
        this.usuario = resp
      }
    })
  }

  // CRUD
  getAllPostagem(){
    this.postagemService.getAllPostagens().subscribe({
      next: (resp: Postagem[]) => {
        this.listaPostagem = resp
      },
    })
  }

  publicar() {
    this.tema.temaId = this.idTema
    this.postagem.tema = this.tema

    this.usuario.usuarioId = this.idUsuario
    this.postagem.usuario = this.usuario

    this.postagemService.postPostagem(this.postagem).subscribe({
      next: (resp: Postagem) => {
        this.postagem = resp
        this.alertaService.showAlertSuccess('Publicação realizada com sucesso!')
        this.postagem = new Postagem()
        this.getAllPostagem()
      }
    })
  }




}
