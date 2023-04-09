import { Component, Input, Output, EventEmitter } from '@angular/core';
import { EmptyTask } from 'src/app/artifacts/Types';
import { Task } from 'src/app/interfaces/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
    @Input() task: Task = EmptyTask
    @Output() evtEmDelete: EventEmitter<Task> = new EventEmitter()
    @Output() evtEmToggle: EventEmitter<Task> = new EventEmitter()
    faTimes = faTimes

    cbkDeleteTask() {
      console.log(this.task)
      this.evtEmDelete.emit(this.task)
    }

    cbkToogleTask() {
      console.log(this.task)
      this.evtEmToggle.emit(this.task)
    }
}
