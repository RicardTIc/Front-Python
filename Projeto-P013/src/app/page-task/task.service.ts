import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {


  lista : Array<Task> = new Array<Task>();
  

  constructor() { }

  addTask(task: Task){

    task.id = this.lista.length
    this.lista.push(task);
  }

  delTask(index: number){
    this.lista.splice(index,1)
  }
   
   editTask(task: Task){
   
     for (let i = 0; i < this.lista.length; i++) {
   
       if(task === this.lista[i]){
   
         this.lista.splice(i,1, task)
       }
     }
   }
}
