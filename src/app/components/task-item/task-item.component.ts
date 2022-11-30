import { Component, Input, OnInit } from '@angular/core';
import { taskItem } from 'src/app/@domain/interfaces/task-item.interface';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
 task!:taskItem


  constructor() { }

  ngOnInit(): void {
  }


 
}
