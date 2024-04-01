import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnChanges, OnInit {

  @Input() mensagem: string = '';

  ngOnInit(): void {
    this.mensagem = 'Mensagem alterada no ngOnInit';
    console.log('ngOnInit chamado em CicloComponent, a mensagem é: ' + this.mensagem);
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes['mensagem']) {
      console.log(`Mensagem trocada de ${changes['mensagem'].previousValue} para
       ${changes['mensagem'].currentValue}`);
    }

    console.log('ngOnChanges');
    for (let propName in changes) {
      let change = changes[propName];
      //transforma o objeto em string para exibir no console
      let valorAtual  = JSON.stringify(change.currentValue);
      //transforma o objeto em string para exibir no console
      let valorAnterior = JSON.stringify(change.previousValue);
      console.log(`${propName}: Valor Atual = ${valorAtual}, 
      Valor Anterior = ${valorAnterior}`);
    }
  }
}
