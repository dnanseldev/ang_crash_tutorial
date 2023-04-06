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
    @Output() evDelete: EventEmitter<Task> = new EventEmitter()
    faTimes = faTimes

    fireDelete() {
      console.log(this.task)
      this.evDelete.emit(this.task)
    }
}
