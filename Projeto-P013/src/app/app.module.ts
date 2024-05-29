import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{ FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './paginas/login/login.component';
import { CadastroComponent } from './paginas/cadastro/cadastro.component';
import { HomeComponent } from './paginas/home/home.component';

import { AlunoCadastroComponent } from './paginas/aluno-cadastro/aluno-cadastro.component';
import { TaskAddComponent } from './page-task/task-add/task-add.component';
import { TaskListComponent } from './page-task/task-list/task-list.component';
import { HomeTaskComponent } from './page-task/home-task/home-task.component';
import{ HttpClientModule} from '@angular/common/HTTP';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    HomeComponent,
    AlunoCadastroComponent,
    TaskAddComponent,
    TaskListComponent,
    HomeTaskComponent,
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
