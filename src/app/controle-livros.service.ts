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
      titulo: 'Poeta França, Antologia Poética',
      resumo: 'Essa Antologia Poética reúne todos os trabalhos publicados e outras dezenas de textos inéditos do Poeta França, importante ícone da poesia matuta brasileira, falecido em 2010. Numa edição meticulosa de seu filho Herval Rosano Dantas, que organizou as publicações e seus cordeis em ordem cronológica de produção, a Antologia refaz o caminho de um dos maiores nomes da poesia potiguar, dono de um estilo meticuloso e ao mesmo tempo despojado, em que recria de forma pungente e, muitas vezes, divertida o modo de vida, anseios e memórias do homem sertanejo brasileiro.',
      autores: ['Francisco Rafael Dantas', 'Herval Rosano']
    },
    {
      codigo: 2,
      codEditora: "2",
      titulo: 'As Crônicas de Nárnia',
      resumo: 'Reinos mágicos, criaturas inesquecíveis e batalhas épicas entre o bem o mal: essas histórias são narradas em As Crônicas de Nárnia ― uma série de sete livros que acompanha crianças curiosas e suas aventuras entre o nosso mundo e outros universos mágicos.',
      autores: ['C S. Lewis ', 'Ronald Kyrmse (Tradutor)']
    },
    {
      codigo: 3,
      codEditora: "3",
      titulo: 'Um dia muito mal-humorado',
      resumo: 'Uma grande onde de mau humor está se espalhando pela floresta! Começa com o urso, aborrece a toupeira... que se exalta com o ouriço, que é espinhoso com a raposa. Logo o mau humor do urso deixou todo mundo mal-humorado! será que um pouquinho de amor pode deixar todos felizes de novo?',
      autores: ['Stella J. Jones']
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
