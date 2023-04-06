import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/interfaces/Task';

//import { TASKS } from 'src/app/artifacts/mock-tasks';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit
{
    tasks: Task[] = [];

    constructor( private taskService: TaskService ) {}

    ngOnInit(): void  {
      
        this.taskService.getTasks().subscribe ( p_tasks => this.tasks = p_tasks )
    }

  deleteTasks(task: Task) {
    this.taskService.deleteTask(task).subscribe(
      () => (this.tasks = this.tasks.filter(t => t.id !== task.id))
    )
  }
}
