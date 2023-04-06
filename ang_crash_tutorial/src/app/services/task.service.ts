import { Injectable } from '@angular/core';
import { Task } from 'src/app/interfaces/Task';
//import { TASKS } from 'src/app/artifacts/mock-tasks';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService
{
  private apiUrl = 'http://localhost:9000/tasks'

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {

    //return of(TASKS)
    return this.http.get<Task[]>(this.apiUrl)
  }

  deleteTask(ptask: Task): Observable<Task> {
      
     const url = `${this.apiUrl}/${ptask.id}`
     return this.http.delete<Task>(url)
  }
}
