import { AfterContentInit, Component } from '@angular/core';

@Component({
  selector: 'app-after-content-init',
  templateUrl: './after-content-init.component.html',
  styleUrls: ['./after-content-init.component.css']
})
export class AfterContentInitComponent implements AfterContentInit{
  
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit chamado em AfterContentInitComponent');
  }

}
