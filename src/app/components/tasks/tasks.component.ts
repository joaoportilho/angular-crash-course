import { Component, OnInit } from '@angular/core';
import { TaskItemComponent } from "../task-item/task-item.component";
import { Task } from '../../Task';
import { TaskService } from '../../services/task.service';
import { AddTaskComponent } from "../add-task/add-task.component";

@Component({
    selector: 'app-tasks',
    standalone: true,
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
    imports: [TaskItemComponent, AddTaskComponent]
})
export class TasksComponent implements OnInit{
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void{
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
  } 

  deleteTask(task: Task) {
    this.taskService
    .deleteTask(task)
    .subscribe( // pode e deve ser considerado como um then em promises
      () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
    );
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    console.log(task.reminder)
    this.taskService
    .updateTaskReminder(task)
    .subscribe();
  }

  addTask(task: Task){
    this.taskService.addTask(task).subscribe((task) => (this.tasks.push(task)));
  }
}
