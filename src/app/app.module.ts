import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

<<<<<<< HEAD
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { CreateTaskModule } from './components/create-task/create-task.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SetTaskService } from './@domain/services/set-task.service';
import { HttpClientModule } from '@angular/common/http';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TaskListComponent,
    TaskItemComponent,
    TaskDetailsComponent,
    CreateTaskComponent,
    ContentLayoutComponent,
    EditTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
   // ReactiveFormsModule,

    SharedModule,
    CreateTaskModule
=======
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
>>>>>>> parent of 15feeb8 (upload project)
  ],
  providers: [SetTaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
