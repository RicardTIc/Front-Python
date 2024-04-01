import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CicloComponent } from './ciclo/ciclo.component';
import { FormsModule } from '@angular/forms';
import { ListaComponent } from './lista/lista.component';
import { AfterContentInitComponent } from './after-content-init/after-content-init.component';

@NgModule({
  declarations: [
    AppComponent,
    CicloComponent,
    ListaComponent,
    AfterContentInitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
