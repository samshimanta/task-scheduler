import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task-scheduler';
data!: string;
constructor(){
  console.log(this.data)

}

// createTaskMock(val: any){
// console.log(val)
// }


}
