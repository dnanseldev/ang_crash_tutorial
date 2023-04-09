import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/interfaces/Task';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Output() evtEmAddTask: EventEmitter<Task>  = new EventEmitter()

  text: string = ''
  day: string = ''
  reminder: boolean = false
  showAddTask: boolean = false
  sub: Subscription

  constructor(private uiS: UiService) {
    this.sub = this.uiS.fireToggle().subscribe(value => this.showAddTask = value)

  }

  CbkAddTask()
 {
    if (!this.text) {
      alert('Please add a task!')
      return
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.evtEmAddTask.emit(newTask)

    this.cleanFields()
  }

  cleanFields() {

    this.text = ''
    this.day = ''
    this.reminder = false
  }

}
