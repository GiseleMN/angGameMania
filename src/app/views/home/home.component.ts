import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/services/produto.service';
import { Produto } from 'src/app/models/produto';
import { Jogos } from 'src/app/models/jogos';
import { JogosService } from 'src/app/services/jogos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private produtoService: ProdutoService, private jogosService: JogosService) { }

  listaProdutos = [] as Produto[]
  listaJogos = [] as Jogos[]

  ngOnInit(): void {
    this.carregarProdutos();
    this.carregarJogos();
  }

  carregarProdutos() {
    this.produtoService.getProdutos().subscribe((produtosRecebidos: Produto[]) => {
      this.listaProdutos = produtosRecebidos;
      console.log(this.listaProdutos);
    })
  }

  carregarJogos() {
    this.jogosService.getJogos().subscribe((jogosRecebidos: Jogos[]) => {
      this.listaJogos = jogosRecebidos;
      console.log(this.listaJogos);
    })
  }


}
