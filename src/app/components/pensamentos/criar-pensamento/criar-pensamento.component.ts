import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento/pensamento';
import { PensamentoService } from '../../../services/pensamento.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.css'
})

export class CriarPensamentoComponent implements OnInit {

  formulario!: FormGroup;

  constructor(
    private service: PensamentoService,
    private formBuilder: FormBuilder,
    private router: Router
  ){}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo: ['Formulário reativo'],
      autoria: [''],
      modelo: ['modelo1']
    })
  }

  criarPensamento(){
    this.service.criar(this.pensamento).subscribe(()=>{
      this.router.navigate(['/listarPensamento'])
    })
  }

  cancelar(){
    this.router.navigate(['/listarPensamento'])
  }
}
