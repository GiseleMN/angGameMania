import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jogo } from '../models/jogo';

@Injectable({
  providedIn: 'root'
})
export class JogoService {

  url = "http://localhost:3000/jogos"

  constructor(private httpClient: HttpClient) { }

  getJogos(): Observable<Jogo[]> {
    return this.httpClient.get<Jogo[]>(this.url)
  }




}

