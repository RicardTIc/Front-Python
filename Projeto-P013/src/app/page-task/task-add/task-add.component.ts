import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})

export class TaskAddComponent implements OnInit {

  formTask : FormGroup;

  constructor(private fb: FormBuilder, private task: TaskService) { }

  ngOnInit() {

    this.formTask = this.fb.group({
      id: [0],
      task: [''],
      date:[],
    });
  }

  registerTask(){
       this.formTask.getRawValue().date = new Date()
       this.task.addTask(this.formTask.getRawValue())
  }

}


