import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-lista-pessoa',
  templateUrl: './lista-pessoa.component.html',
  styleUrls: ['./lista-pessoa.component.css']
})
export class ListaPessoaComponent implements OnInit {

  //Array pessoas esta alimentando uma lista atraves da diretiva ngFor.
  pessoas: string [] = ['joão','Maria', 'Angular 2',];

  //variavel para uso em two-way-data-binding
  nome = "Humberto" ;
  

  //Array oara inclusão de dados.
  pessoa: string [];

  constructor() { }

  ngOnInit() {
  }

  //metodo responsavel pela inclusão de dados no Array pessoas.
  listar(){

  }

}
