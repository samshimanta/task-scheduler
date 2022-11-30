import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SetTaskService } from 'src/app/@domain/services/set-task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {

  
  title = new FormControl(null, [Validators.required])
  details = new FormControl(null, [Validators.required])

  editTaskForm: FormGroup = this.builder.group({
    title: this.title,
    details: this.details
  })

 

  constructor(
    private builder : FormBuilder,
    private taskService: SetTaskService,
    private route: Router
   
  ) { }

  ngOnInit(): void {
    
   this.editTaskForm.patchValue(this.taskService.taskData)
  }
 
  formSubmit(): void {
    // check if all fields are valid
    if( this.editTaskForm.valid ){

   
    const taskForm = this.editTaskForm.value;

    // set the time when the task was created
    taskForm.createdAt = new Date().toLocaleString('en-us', { hour:"2-digit", minute:"2-digit",second:"2-digit",  weekday:"long", year:"numeric", month:"short", day:"numeric" }) 
    // console.log(taskForm)
 
     this.taskService.setnewTaskFn(taskForm)
    // this.createTaskForm.reset();
    // Object.keys(this.createTaskForm .controls).forEach(key => {
    //   this.createTaskForm.controls[key].setErrors(null)
    // });
    this.route.navigate([''])

  }
}
}
