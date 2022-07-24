import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/Task';
import { TASK } from 'src/app/mock-task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task: Task = TASK[0]
  fatimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

}