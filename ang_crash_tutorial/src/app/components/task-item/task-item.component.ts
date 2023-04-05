import { Component, Input } from '@angular/core';
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
    faTimes = faTimes
}
