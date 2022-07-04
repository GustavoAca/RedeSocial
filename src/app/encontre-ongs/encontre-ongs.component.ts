import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-encontre-ongs',
  templateUrl: './encontre-ongs.component.html',
  styleUrls: ['./encontre-ongs.component.css']
})
export class EncontreOngsComponent implements OnInit {

  listaUsuariosOng: Usuario[]
  idUsuario: number
  usuario: Usuario = new Usuario()

  constructor(
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute
  ) { }


  ngOnInit() {
    if (environment.token == "") {
      this.router.navigate(['/entrar'])
    }

    this.encontrarOngs()
  }

  encontrarOngs() {
    this.authService.getTodosUsuarios().subscribe((resp: Usuario[]) => {
      this.listaUsuariosOng = resp.filter(function (adm) {
        return adm.tipo == 'adm'
      });
    })
  }


  encontrarTodosUsuarios() {
    this.authService.getTodosUsuarios().subscribe((resp: Usuario[]) => {
      this.listaUsuariosOng = resp
    })
  }

}