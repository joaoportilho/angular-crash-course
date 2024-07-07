import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { TasksComponent } from "../tasks/tasks.component";
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [ButtonComponent, TasksComponent]
})
export class HeaderComponent implements OnInit{
  title: string = 'Task Tracker';
  showAddTask: boolean = false;
  subscription: Subscription;

  constructor(private uiService:UiService) {
    this.subscription = this.uiService.onToggle()
    .subscribe((value) => (this.showAddTask = value));
  }

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }

  ngOnInit(): void {
    
  }
}
