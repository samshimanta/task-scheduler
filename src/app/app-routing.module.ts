import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { TaskListComponent } from './components/task-list/task-list.component';

const routes: Routes = [
  { path: '', component: TaskListComponent },
  { path: 'create-task', component: CreateTaskComponent },
  { path: 'edit-task', component: EditTaskComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
