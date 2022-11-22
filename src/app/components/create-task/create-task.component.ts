import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { newTask } from 'src/app/@domain/classes/newTask';
import { taskItem } from 'src/app/@domain/interfaces/task-item.interface';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss'],
})
export class CreateTaskComponent implements OnInit {
  @Output() newTask = new
  EventEmitter<taskItem>();

  createTaskForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    details: new FormControl('', [Validators.required]),
  });
  constructor() {}

  ngOnInit(): void {}

  formSubmit(form: FormGroup): void {
    const { title, details } = form.value;
    console.log({ title, details });
    const newLog: taskItem = new newTask(title,
    details)
    this.newTask.emit(newLog);
  }
}
