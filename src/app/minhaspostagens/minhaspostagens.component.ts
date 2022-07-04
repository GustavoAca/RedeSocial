import { PostagemService } from './../service/postagem.service';
import { environment } from './../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { Tema } from '../model/Tema';
import { Postagem } from '../model/Postagem';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { TemaService } from '../service/tema.service';
import { AlertaService } from '../service/alerta.service';

@Component({
  selector: 'app-minhaspostagens',
  templateUrl: './minhaspostagens.component.html',
  styleUrls: ['./minhaspostagens.component.css']
})
export class MinhaspostagensComponent implements OnInit {

  usuario: Usuario = new Usuario()
  idUsuario = environment.usuarioId
  tema: Tema = new Tema()
  listaTemas: Tema[]
  idTema: number
  postagem: Postagem = new Postagem()
  listaPostagem: Postagem[]
  idPost: number
  postagemSelecionada: Postagem = new Postagem()  

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    private postagemService: PostagemService,
    private temaService: TemaService,
    private authService: AuthService,
    private alertaService: AlertaService
    ) { }

  ngOnInit() {
    window.scroll(0, 0)
    if (environment.token == '') {
      this.alertaService.showAlertInfo('Sua sessão expirou, faça o login novamente');
      this.router.navigate(['/entrar']);
    }
    
    this.idPost = this.route.snapshot.params['id']
    this.findByIdPostagem(this.idPost)
    this.getAllPostagem();
    this.getAllTemas();
    this.findByIdUsuario();
  }

  getAllTemas() {
    this.temaService.getAllTema().subscribe((resp: Tema[]) => {
      this.listaTemas = resp
    })
  }

  findByIdTema() {
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema) => {
      this.tema = resp
    })
  }

  getAllPostagem() {
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagem = resp
    })
  }

  findByIdUsuario() {
    this.authService.getByIdUsuario(this.idUsuario).subscribe((resp: Usuario) => {
      this.usuario = resp
    })
  }

  editar() {
    this.tema.temaId = this.idTema
    this.postagem.tema = this.tema
    this.usuario.usuarioId = this.idUsuario
    this.postagem.usuario = this.usuario

    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      this.alertaService.showAlertSuccess("Postagem realizada com sucesso!")
      this.postagem = new Postagem()
    })
  }

  findByIdPostagem(id: number) {
    this.postagemService.getByIdPostagem(id).subscribe((resp: Postagem) => {
      this.postagem = resp
    })
  }

  apagarSelecionada() {
    this.postagemService.deletePostagem(this.postagemSelecionada.postagemId).subscribe(() => {
      this.alertaService.showAlertSuccess('Postagem apagada com sucesso!')
      this.idPost = this.route.snapshot.params['id']
      this.findByIdPostagem(this.idPost)
      this.getAllPostagem();
      this.getAllTemas();
      this.findByIdUsuario();
      this.router.navigate(['/minhaspostagens'])
    })
  }

  selecionarPostagem(postagem: Postagem) {
    this.postagemSelecionada.postagemId=postagem.postagemId
    this.postagemSelecionada.imagem=postagem.imagem
    this.postagemSelecionada.conteudo = postagem.conteudo
    this.postagemSelecionada.tema = postagem.tema
    this.postagemSelecionada.usuario = postagem.usuario
    this.idTema = postagem.tema.temaId
  }

  atualizarSelecionada() {
    this.tema.temaId = this.idTema
    this.postagemService.putPostagem(this.postagemSelecionada).subscribe((resp: Postagem) => {
      this.postagem = resp
      this.alertaService.showAlertSuccess('Postagem atualizada com sucesso!')
      this.findByIdPostagem(this.idPost)
      this.getAllPostagem();
      this.getAllTemas();
      this.findByIdUsuario();
      this.router.navigate(['/minhaspostagens'])
    })
  }




}
