import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento/pensamento';
import { PensamentoService } from '../../../services/pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrl: './listar-pensamento.component.css',
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos: Pensamento[] = [];
  paginaAtual: number = 1;
  totalItems: number = 0
  haMaisPensamentos: boolean = true;

  constructor(private service: PensamentoService) {}

  ngOnInit(): void {
    this.service.listar(this.paginaAtual).subscribe((response) => {
      this.listaPensamentos = response.data;
      this.totalItems = response.items
    });
  }

  carregarMaisPensamentos() {
    this.service.listar(++this.paginaAtual)
      .subscribe(response => {
        this.listaPensamentos.push(...response.data);
        console.log(this.listaPensamentos.length);
        if(this.listaPensamentos.length >= response.items) {
          this.haMaisPensamentos = false;
        }
      });
  }
}
