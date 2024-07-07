import { Component } from '@angular/core';
import {TASKS} from '../../mock-tasks';
import { Task } from '../../Task';
import { TaskItemComponent } from "../task-item/task-item.component";
@Component({
    selector: 'app-tasks',
    standalone: true,
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
    imports: [TaskItemComponent]
})
export class TasksComponent {
  tasks: Task[] = TASKS;

  constructor() {}

}
