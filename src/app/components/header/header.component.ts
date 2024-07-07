import { Component } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { TasksComponent } from "../tasks/tasks.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [ButtonComponent, TasksComponent]
})
export class HeaderComponent {
  title: string = 'Task Tracker';


  toggleAddTask() {
    console.log('toggle')
  }
}
