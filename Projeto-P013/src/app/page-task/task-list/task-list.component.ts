import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from 'src/app/models/task.model';




@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(private task: TaskService) { }

  ngOnInit() {
  }

  delete(index : number){

    this.task.delTask(index)

    
  }
}
