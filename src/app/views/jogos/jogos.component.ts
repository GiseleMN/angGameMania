import { Component, OnInit } from '@angular/core';
import { Jogos } from 'src/app/models/jogos';

@Component({
  selector: 'app-jogos',
  templateUrl: './jogos.component.html',
  styleUrls: ['./jogos.component.css']
})
export class JogosComponent implements OnInit {

  listaJogos = [] as Jogos[];

  constructor() { }

  ngOnInit(): void {
  }

}
