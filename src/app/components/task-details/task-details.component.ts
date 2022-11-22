import { Component, OnInit } from '@angular/core';
import { taskItem } from 'src/app/@domain/interfaces/task-item.interface';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {

  task: taskItem[]=[
    {
    title: 'task 1',
    details: 'No hay nadie que ame el dolor mismo, que lo busque, lo encuentre y lo quiera, simplemente porque es el dolor'
    },
    {
      title: 'task 2',
      details: 'No hay nadie que ame el dolor mismo, que lo busque, lo encuentre y lo quiera, simplemente porque es el dolor'
    },
    {
      title: 'task 3',
      details: 'No hay nadie que ame el dolor mismo, que lo busque, lo encuentre y lo quiera, simplemente porque es el dolor'
    },
    {
      title: 'task 4',
      details: 'No hay nadie que ame el dolor mismo, que lo busque, lo encuentre y lo quiera, simplemente porque es el dolor'
    },

  ] 
  

  constructor() { }
  

  ngOnInit(): void {
  }

}
