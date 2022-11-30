import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateTaskRoutingModule } from './create-task-routing.module';
import { CreateTaskComponent } from './create-task.component';


@NgModule({
  declarations: [
    CreateTaskComponent
  ],
  imports: [
    CommonModule,
    CreateTaskRoutingModule
  ]
})
export class CreateTaskModule { }
