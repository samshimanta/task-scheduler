import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { newTask } from 'src/app/@domain/classes/newTask';
import { taskItem } from 'src/app/@domain/interfaces/task-item.interface';
import { SetTaskService } from 'src/app/@domain/services/set-task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss'],
})
export class CreateTaskComponent implements OnInit {

   

 
    title = new FormControl(null, [Validators.required])
    details = new FormControl(null, [Validators.required])

    createTaskForm: FormGroup = this.builder.group({
      title: this.title,
      details: this.details
    })

  constructor(
    private setTask:SetTaskService ,
    private http : HttpClient,
    private builder: FormBuilder,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/todos/20').subscribe(
      res => console.log(res)
    )
  }



  formSubmit(): void {
    // check if all fields are valid
    if( this.createTaskForm.valid ){

   
    const taskForm = this.createTaskForm.value;

    // set the time when the task was created
    taskForm.createdAt = new Date().toLocaleString('en-us', { hour:"2-digit", minute:"2-digit",second:"2-digit",  weekday:"long", year:"numeric", month:"short", day:"numeric" }) 
    // console.log(taskForm)
 
    this.setTask.setnewTaskFn(taskForm)
    this.createTaskForm.reset();
    Object.keys(this.createTaskForm .controls).forEach(key => {
      this.createTaskForm.controls[key].setErrors(null)
    });
    this.route.navigate([''])

  }
}
   
}
