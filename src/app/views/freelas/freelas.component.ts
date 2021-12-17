import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-freelas',
  templateUrl: './freelas.component.html',
  styleUrls: ['./freelas.component.css']
})
export class FreelasComponent implements OnInit {

  constructor() { }

  salario: number = 9300.00;
  diasmes: number = 20;
  horasdia: number = 6;
  precohora!: number;
  horasestipuladas: number = 3;
  precoestipulado!: number;
  plus: number = 5;

  ngOnInit(): void {
    this.atualizar_preco_hora();
    this.atualizar_preco_estipulado();
  }

  ngDoCheck() {
    this.atualizar_preco_hora();
    this.atualizar_preco_estipulado();
  }

  private atualizar_preco_hora() {
    this.precohora = (this.salario / (this.diasmes * this.horasdia)) * (1 + (this.plus / 100));
  }

  private atualizar_preco_estipulado() {
    this.precoestipulado = this.precohora * this.horasestipuladas;
  }

}
