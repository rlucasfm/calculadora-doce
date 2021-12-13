import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-finalizar-modal',
  templateUrl: './finalizar-modal.component.html',
  styleUrls: ['./finalizar-modal.component.css']
})
export class FinalizarModalComponent implements OnInit {

  active: boolean = false;
  margem_lucro: number = 10;
  valor_preco?: number;

  @Input() orcamento_atual!: string;  

  constructor() { }

  ngOnInit(): void {
    this.atualizar_preco();
  }

  ngDoCheck() {
    this.atualizar_preco();
  }

  public toggleActive() {
    this.active = !this.active;
  }

  public get_active_class() {
    if(this.active) {
      return "is-active";
    } else {
      return "";
    }
  }

  public atualizar_preco() {
    this.valor_preco = (1 + (this.margem_lucro / 100)) * parseFloat(this.orcamento_atual.replace(',', '.'));    
  }

  public show_preco() {
    return this.valor_preco?.toFixed(2);
  }

}
