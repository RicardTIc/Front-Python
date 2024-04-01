import { AfterContentChecked, AfterViewChecked, Component, DoCheck, Input } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements DoCheck, AfterContentChecked, AfterViewChecked{
  
  
  ngAfterViewChecked(): void {
    console.log('A view foi verificada em ListaComponent')
  }

  @Input() items: string[] = [];

  ngAfterContentChecked(): void {
    console.log('O Conteúdo foi verificado em ListaComponent');
  }
  
  
  private ContadorDeIntensAnterior: number = 0;

  ngDoCheck() {
    if (this.items.length !== this.ContadorDeIntensAnterior) {
      console.log(`Contador de item mudou de  ${this.ContadorDeIntensAnterior} para ${this.items.length}`);
      this.ContadorDeIntensAnterior = this.items.length;
    }
  }
}
