import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  livros: Array<Livro> = [
    {
      codigo: 1,
      codEditora: "1",
      titulo: '?',
      resumo: '?',
      autores: ['?', 'Kathy Sierra']
    },
    {
      codigo: 2,
      codEditora: "2",
      titulo: '?',
      resumo: '?',
      autores: ['?', 'Harvey Deitel']
    },
    {
      codigo: 3,
      codEditora: "3",
      titulo: 'Livro 3',
      resumo: '?',
      autores: ['?','Harvey Deitel']
    }
  ];

  constructor() { }

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    livro.codigo = this.livros.length > 0
      ? this.livros[this.livros.length -1].codigo + 1
      : 1;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const index = this.livros.findIndex(livro => livro.codigo === codigo);
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }
}
