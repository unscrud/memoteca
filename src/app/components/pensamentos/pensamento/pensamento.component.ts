import { Component } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.css'
})
export class PensamentoComponent {

  pensamento = {
    conteudo: '"O segredo do sucesso está em começar a fazer o que é necessário, depois fazer o que é possível e, de repente, você estará fazendo o impossível."',
    autoria: 'São Francisco de Assis',
    modelo: 'modelo3'
  }

}
