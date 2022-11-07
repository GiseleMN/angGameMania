import { Component, OnInit } from '@angular/core';
import { Jogo } from 'src/app/models/jogo';
import { JogoService } from 'src/app/services/jogo.service';

@Component({
  selector: 'app-jogos',
  templateUrl: './jogos.component.html',
  styleUrls: ['./jogos.component.css']
})
export class JogosComponent implements OnInit {

  listaJogos = [] as Jogo[];

  constructor(private jogoService: JogoService) { }

  ngOnInit(): void {
    this.carregarJogos();
  }


  carregarJogos() {
    this.jogoService.getJogos().subscribe((jogosRecebido: Jogo[]) => {
      this.listaJogos = jogosRecebido;
      console.log(this.listaJogos);
    })
  }

}
