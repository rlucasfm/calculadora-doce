import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Orcamento } from 'src/app/models/orcamento';

@Component({
  selector: 'app-doces',
  templateUrl: './doces.component.html',
  styleUrls: ['./doces.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class DocesComponent implements OnInit {

  orcamentos: Orcamento[] = [
    { descricao: "Leite condensado", rendimento: 0.5, valor: 4.9 },
    { descricao: "Creme de leite", rendimento: 0.5, valor: 4.9 }
  ];

  colunas: string[] = ["Descrição", "Rendimento", "Valor"];

  soma!: string;

  constructor( ) { }

  ngOnInit(): void {
    this.atualizarSoma();
  }

  ngDoCheck() {
    this.atualizarSoma();
  }

  atualizarSoma() {
    let valores = this.orcamentos.map((item) => {
      return item.valor / item.rendimento;
    });

    const soma = valores.reduce((acc, curr) => acc + curr);
    this.soma = soma.toFixed(2).replace('.', ',');
    return this.soma;
  }

  atualizarValor(event: any) {
    let valor_at = parseFloat(event);
    
    if(isNaN(valor_at)) {
      return 0;
    }
    return Math.round((valor_at + Number.EPSILON) * 100) / 100;
  }

  adicionarCusto() {
    this.orcamentos.push({descricao: '', rendimento: 1, valor: 0})
  }
}
