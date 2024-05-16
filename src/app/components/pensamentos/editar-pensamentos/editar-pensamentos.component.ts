import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento/pensamento';

@Component({
  selector: 'app-editar-pensamentos',
  templateUrl: './editar-pensamentos.component.html',
  styleUrl: './editar-pensamentos.component.css'
})
export class EditarPensamentosComponent implements OnInit {
  pensamento: Pensamento = {
    id: '',
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor (){}

  ngOnInit(): void {

  }

  editarPensamento(){}

  cancelar(){}
}
