import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';
import { AlertaService } from '../service/alerta.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  tema: Tema = new Tema()
  listaTemas: Tema[]
  tagTema: string


  idTema: number
  temaSelecionado: Tema = new Tema()
  editarTema: Tema = new Tema()


  constructor(
    private router: Router,
    private temaService: TemaService,
    private route: ActivatedRoute,
    private alertaService: AlertaService,

  ) { }


  ngOnInit() {
    if (environment.token == "") {
      this.router.navigate(['/entrar'])
    }

    if (environment.tipo != 'adm'){
      this.alertaService.showAlertDanger('Você precisa ser uma ONG para acessar essa página')
      this.router.navigate(['/postagens'])
    }

    this.findAllTemas()
    this.idTema = this.route.snapshot.params['temaId']
    this.findByIdTemas(this.idTema)
  }

  findAllTemas() {
    this.temaService.getAllTema().subscribe((resp: Tema[]) => {
      this.listaTemas = resp
    })
  }

  findByIdTemas(idTema: number) {
    this.temaService.getByIdTema(idTema).subscribe((resp: Tema) => {
      this.tema = resp
    })
  }

  cadastrarTema() {
    this.temaService.postTema(this.tema).subscribe((resp: Tema) => {
      this.tema = resp
      this.alertaService.showAlertSuccess("Tema cadastrado com sucesso")
      this.findAllTemas()
      this.tema = new Tema()
    })
  }

  apagarSelecionado(){
    this.temaService.deleteTema(this.temaSelecionado.temaId).subscribe(() =>{
      this.alertaService.showAlertSuccess('Tema apagado com sucesso')
      this.router.navigate(['/temas'])
      this.findAllTemas()
    })
  }

  editarSelecionado() {
    this.temaService.putTema(this.temaSelecionado).subscribe((resp: Tema) => {
      this.tema = resp
      this.alertaService.showAlertSuccess('Tema atualizado com sucesso')
      this.router.navigate(['/temas'])
      this.findAllTemas()
    })
  }

  selecionarTema(tema: Tema) {
    this.temaSelecionado.descricao = tema.descricao
    this.temaSelecionado.tag = tema.tag
    this.temaSelecionado.temaId = tema.temaId
  }

  buscarPorNome() {
    if (this.tagTema == '') {
      this.findAllTemas()
    } else {
      this.temaService.getByNome(this.tagTema).subscribe((resp: Tema[]) => {
        this.listaTemas = resp
      })
    }

  }

}
