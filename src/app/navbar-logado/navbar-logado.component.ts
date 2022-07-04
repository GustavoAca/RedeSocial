import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-navbar-logado',
  templateUrl: './navbar-logado.component.html',
  styleUrls: ['./navbar-logado.component.css']
})
export class NavbarLogadoComponent implements OnInit {
  nome = environment.nome
  foto = environment.imagemUrl 
  id = environment.usuarioId


  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  sair() {
    this.router.navigate(['/entrar'])
    environment.usuarioEmail = ''
    environment.nome = ''
    environment.token = ''
    environment.imagemUrl = ''
    environment.usuarioId = 0
  }
}
