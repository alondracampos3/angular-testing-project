import { Component, Input } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  @Input() task!: string[]; 

  tasks: string[] = [];

  constructor(private taskService: TaskService) {
    console.log('TaskListComponent initialized');
  }

  addTask(task: string) {
    this.nuevaTask();
    console.log('Adding task:', task);
  }

  updateTask(task: string) {
    this.nuevaTask();
    console.log('Updating task:', task);
  }

  deleteTask(task: string) {
    this.nuevaTask();
    console.log('Deleting task:', task);
  }

  nuevaTask():string{
  return''
  }


}
