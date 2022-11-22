import { taskItem } from "../interfaces/task-item.interface";


export class newTask implements taskItem{
    title: string;
    details: string;
    constructor(title:string, details:string){
        this.title = title
        this.details = details
    }
}