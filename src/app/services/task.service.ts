import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
 task!: string[];

  constructor(private http: HttpClient) {
    this.task=JSON.parse(localStorage.getItem("data") || '[]')
    console.log('TaskService initialized');
  }

  getTask(){
    return this.task;
  }

addTask (task:string) {
  this.task.push(task);
  localStorage.setItem('data',JSON.stringify(this.task));
}

nuevaTask():string{
  return''
}

deleteTask(task:string){
  return''
}

}
