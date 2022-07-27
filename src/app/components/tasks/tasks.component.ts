import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from 'src/app/Task';

//El componente no se va a encargar de realizar las tareas, ahora se lo derivo al archivo de servicios
//De esta forma el componente no maneja la logica de las tareas.

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(
    private taskService: TaskService  //Inicializo el Servicio
  ) { }

  ngOnInit(): void {
    //Promesas
    this.taskService.getTask().subscribe( (tasks) =>{
      this.tasks = tasks; 
    } );
  }


}
