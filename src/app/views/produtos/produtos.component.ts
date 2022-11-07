import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/services/produto.service';
import { Produto } from 'src/app/models/produto';

@Component({
  selector: 'app-novos-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})

export class ProdutosComponent implements OnInit {

  constructor(private produtoService: ProdutoService) { }

  listaProdutos = [] as Produto[]

  ngOnInit(): void {
    this.carregarProdutos();
  }
  carregarProdutos() {
    this.produtoService.getProdutos().subscribe((produtosRecebidos: Produto[]) => {
      this.listaProdutos = produtosRecebidos;
      console.log(this.listaProdutos);
    })
  }

}
