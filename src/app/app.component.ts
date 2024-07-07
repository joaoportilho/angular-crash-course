import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { ButtonComponent } from "./components/button/button.component";
import { TasksComponent } from "./components/tasks/tasks.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule} from '@angular/forms';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, ButtonComponent, TasksComponent, FontAwesomeModule, FormsModule]
})
export class AppComponent {
  
}
