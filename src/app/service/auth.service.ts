import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { environment } from '../../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  refreshToken(){
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
  }

  entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin>{
    return this.http.post <UsuarioLogin> ('https://enlaceorg.herokuapp.com/usuarios/login', usuarioLogin)
  }

  cadastrar(usuario: Usuario): Observable<Usuario>{
    return this.http.post <Usuario> ('https://enlaceorg.herokuapp.com/usuarios/cadastro', usuario)
  }

  getByIdUsuario(id: number):Observable<Usuario>{
    return this.http.get<Usuario>(`https://enlaceorg.herokuapp.com/usuarios/${id}`, 
    {headers: new HttpHeaders().set('Authorization', environment.token)})
  }

  getTodosUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>('https://enlaceorg.herokuapp.com/usuarios', 
    {headers: new HttpHeaders().set('Authorization', environment.token)});
  }

  logado(){
    return environment.token != '';
  }

  eAdmin() {
    return environment.tipo == 'adm'
  }
}
