import { Component, Input } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-item',
  imports: [],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {

@Input() task!: string[]; 

tasks: string[] = [];

constructor(private TaskService: TaskService) {
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
return''}


}
