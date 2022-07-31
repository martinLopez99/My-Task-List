import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from 'src/app/Task';
import { TASK } from 'src/app/mock-task';
import { Observable, of } from 'rxjs'; //Esta libreria me va a permitir definir un metodo "observable" asincronico


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}





//Servicios se va a encargar de gestionar todas las tareas

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiURL = 'http://localhost:5000/tasks';

  constructor(
    private http:HttpClient
  ) { }

  getTask(): Observable<Task[]> { //getTask() es un metodo asincronico.
    return this.http.get<Task[]>(this.apiURL);
  }

  deleteTask(task:Task): Observable<Task>{
    const url = `${this.apiURL}/${task.id}`
    return this.http.delete<Task>(url);
  }

  updateTaskReminder(task : Task): Observable<Task>{
    const url = `${this.apiURL}/${task.id}`
    return this.http.put<Task>(url, task, httpOptions);
  }

  addTask(task:Task): Observable<Task>{
    return this.http.post<Task>(this.apiURL, task, httpOptions);
  }

}
