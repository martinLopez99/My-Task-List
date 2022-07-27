import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Task } from 'src/app/Task';
import { TASK } from 'src/app/mock-task';
import { Observable, of } from 'rxjs'; //Esta libreria me va a permitir definir un metodo "observable" asincronico


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
}
