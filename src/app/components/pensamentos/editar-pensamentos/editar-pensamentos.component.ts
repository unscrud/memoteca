import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento/pensamento';
import { PensamentoService } from '../../../services/pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor (
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {

  }

  editarPensamento(){}

  cancelar(){}
}
