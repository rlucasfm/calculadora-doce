import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { Orcamento } from 'src/app/models/orcamento';
import { FinalizarModalComponent } from 'src/app/modules/finalizar-modal/finalizar-modal.component';

@Component({
  selector: 'app-lacos',
  templateUrl: './lacos.component.html',
  styleUrls: ['./lacos.component.css']
})
export class LacosComponent implements OnInit {

  @ViewChild(FinalizarModalComponent) modal_finalizar: any;

  orcamentos: Orcamento[] = [
    { descricao: "Fita", rendimento: 1, valor: 4.95 },
    { descricao: "Plástico", rendimento: 1, valor: 4.95 }
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

  removerCusto(indice: number) {
    this.orcamentos.splice(indice, 1);
  }

  abrir_modal() {
    this.modal_finalizar.toggleActive();
  }
}
