import { Component, OnInit } from '@angular/core';
import { TaskItemComponent } from "../task-item/task-item.component";
import { Task } from '../../Task';
import { TaskService } from '../../services/task.service';

@Component({
    selector: 'app-tasks',
    standalone: true,
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
    imports: [TaskItemComponent]
})
export class TasksComponent implements OnInit{
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void{
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
  } 
}
