import { Component } from '@angular/core';
import { TaskItemComponent } from "./task-item/task-item.component";
import { TaskListComponent } from "./task-list/task-list.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [TaskItemComponent, TaskListComponent, FormsModule],
})
export class AppComponent {
  title = 'angular-testing-project';

  addTask(task: string) {

  }

  deleteTask(task: string) {
  }

  getTasks(): string[] {
    return [];
  }
}
