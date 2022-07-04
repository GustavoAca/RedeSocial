import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllTema():Observable<Tema[]>{
    return this.http.get<Tema[]>('https://enlaceorg.herokuapp.com/temas', 
    {headers: new HttpHeaders().set('Authorization', environment.token)});
  }

  getByIdTema(id:number):Observable<Tema>{
    return this.http.get<Tema>(`https://enlaceorg.herokuapp.com/temas/${id}`, 
    {headers: new HttpHeaders().set('Authorization', environment.token)});
  }

  getByNome(nome: string): Observable<Tema[]>{
    return this.http.get<Tema[]>(`https://enlaceorg.herokuapp.com/temas/descricao/${nome}`, 
    {headers: new HttpHeaders().set('Authorization', environment.token)})
  }

  postTema(tema: Tema):Observable<Tema>{
    return this.http.post<Tema>('https://enlaceorg.herokuapp.com/temas', tema, 
    {headers: new HttpHeaders().set('Authorization', environment.token)});
  }

  putTema(tema:Tema):Observable<Tema>{
    return this.http.put<Tema>('https://enlaceorg.herokuapp.com/temas', tema, 
    {headers: new HttpHeaders().set('Authorization', environment.token)});
  }

  deleteTema(id: number){
    return this.http.delete(`https://enlaceorg.herokuapp.com/temas/${id}`, 
    {headers: new HttpHeaders().set('Authorization', environment.token)});
  }
}
