import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { taskItem } from '../interfaces/task-item.interface';

@Injectable({
  providedIn: 'root'
})
export class SetTaskService {

  taskData!: taskItem;
  private newTask$ = new BehaviorSubject<any>({});
  createdTask$ = this.newTask$.asObservable();

  constructor(private http : HttpClient) { }

  // set a new task
  setnewTaskFn(product: any) {
    this.newTask$.next(product);
  }

  

  logger (msg: any) :void {
    console.log(msg)
  }


  getTaskData( data:taskItem ){
     this.taskData = data
    
  }
  editTaskFn(){
    
  }

}
