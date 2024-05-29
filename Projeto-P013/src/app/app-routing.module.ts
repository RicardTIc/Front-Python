import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './paginas/login/login.component';
import { CadastroComponent } from './paginas/cadastro/cadastro.component';
import { HomeComponent } from './paginas/home/home.component';
import { AlunoCadastroComponent } from './paginas/aluno-cadastro/aluno-cadastro.component';
import { TaskAddComponent } from './page-task/task-add/task-add.component';
import { TaskListComponent } from './page-task/task-list/task-list.component';
import { HomeTaskComponent } from './page-task/home-task/home-task.component';




const routes: Routes = [

  {path:'', redirectTo:"login", pathMatch:"full"},
  {path:'login', component: LoginComponent},
  {path:'cadastro', component: CadastroComponent},
  {path:'home', component: HomeComponent},
  {path: 'aluno-cadastro', component: AlunoCadastroComponent},
  {path: 'task-add', component: TaskAddComponent},
  {path: 'task-list', component: TaskListComponent},
  {path: 'home-task', component: HomeTaskComponent},
  {path:'**', redirectTo:'login', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
