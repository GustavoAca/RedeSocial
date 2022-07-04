import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { Usuario } from '../model/Usuario';
import { AlertaService } from '../service/alerta.service';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-postagem',
  templateUrl: './postagem.component.html',
  styleUrls: ['./postagem.component.css']
})
export class PostagemComponent implements OnInit {

  usuario: Usuario = new Usuario()
  idUsuario = environment.usuarioId
  tema: Tema = new Tema()
  listaTema: Tema[]
  idTema: number
  postagem: Postagem = new Postagem()
  listaPostagem: Postagem[]




  constructor(
    public router: Router, 
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
    this.getAllPostagem();
    this.getAllTemas();
  }


  // CRUD
  getAllPostagem(){
    this.postagemService.getAllPostagens().subscribe({
      next: (resp: Postagem[]) => {
        this.listaPostagem = resp
      },
    })
  }


  getAllTemas() {
    this.temaService.getAllTema().subscribe((resp: Tema[]) => {
      this.listaTema = resp
    })
  }

  findByIdTema() {
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema) => {
      this.tema = resp
    })
  }


  findByIdUser() {
    this.authService.getByIdUsuario(this.idTema).subscribe((resp: Usuario) => {
      this.usuario = resp
    })
  }


}
