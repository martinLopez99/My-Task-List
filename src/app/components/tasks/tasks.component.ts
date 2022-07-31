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
    this.taskService.getTask().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task)
      .subscribe(() => {
        this.tasks = this.tasks.filter(t => t.id !== task.id)
      })
  }

  toggleReminder(task:Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task : Task){
    this.taskService.addTask(task)
    .subscribe((task) => {
      this.tasks.push(task);
    })
  }
}
