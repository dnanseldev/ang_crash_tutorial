import { Component } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title: string = 'Task Tracker';
  showAddTask: boolean = false
  sub: Subscription

  constructor( private uiS: UiService
              ,private router: Router) {
      this.sub = this.uiS.fireToggle().subscribe(value => this.showAddTask = value)
  }

  toggleAddTask() {
    
    this.uiS.toggleAddTask()
  }

  hasRoute(route: string) {
    return this.router.url === route
  }
  
}
