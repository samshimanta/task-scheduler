import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';
import { taskItem } from 'src/app/@domain/interfaces/task-item.interface';
import { SetTaskService } from 'src/app/@domain/services/set-task.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss'],
})
export class TaskDetailsComponent implements OnInit {

  testProperty!:string;




  task: taskItem[] = [
    {
      title: 'task 1',
      details:
        'No hay nadie que ame el dolor mismo, que lo busque, lo encuentre y lo quiera, simplemente porque es el dolor',
    },
    {
      title: 'task 2',
      details:
        'No hay nadie que ame el dolor mismo, que lo busque, lo encuentre y lo quiera, simplemente porque es el dolor',
    },
    {
      title: 'task 3',
      details:
        'No hay nadie que ame el dolor mismo, que lo busque, lo encuentre y lo quiera, simplemente porque es el dolor',
    },
    // {
    //   title: 'task 4',
    //   details:
    //     'No hay nadie que ame el dolor mismo, que lo busque, lo encuentre y lo quiera, simplemente porque es el dolor',
    // },
  ];

  constructor(private taskService: SetTaskService) {}

  ngOnInit(): void {
    // subscribe and set the new task to task array
    this.taskService.createdTask$.subscribe((val)=> {
      console.log( val )
     
     // update task array if not an empty object 
     if ( Object.keys(val).length !== 0){
     
       this.task.unshift(val)
     }
    })

   
  }


//deleteTask function recieves the clicked taskItem object 
// filter the task Array by comparing the title 
     
  deleteTask(data: taskItem){
    this.task = this.task.filter( x => {
      return x.title !== data.title
    } )
  }


// editTaskFn recieves the task object  and should pass it to form
editTask( data:taskItem ){
 
  this.taskService.getTaskData(data)

 // console.log(data)
}


}
