import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
 

  
  title = 'cicloDeVida';

  @ViewChild('elementoInput') elementoInput: ElementRef | undefined;

  mensagem: string = '';

  items: string[] = ['item1', 'item2', 'item3'];
  itemDeLista: string = '';

  ngAfterViewInit(): void {
    this.elementoInput?.nativeElement.focus();
    console.log('elementoInput recebeu o foco em AppComponent');
  }

  ngOnInit(): void {
    this.mensagem = 'Mensagem do AppComponent ';
    console.log('ngOnInit chamado em AppComponent, a mensagem é: ' + this.mensagem);
  }

  getMensagem(): string {
    return this.mensagem;
  }

  getItens() {    
      return this.items;
  }

  adicionaItem(){
    this.items.push(this.itemDeLista);
  }
}
