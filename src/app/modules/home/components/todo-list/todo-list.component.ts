import { Component, DoCheck, OnInit } from '@angular/core';
import { first } from 'rxjs';

//Interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {

  public taskList: Array<TaskList> = [];

  constructor() { }

  ngDoCheck(): void {

  }

  ngOnInit(){
    this.taskList.sort( (first, last) => Number(first.checked) - Number(last.checked));
  }

  public setEmitTaskList(event: String){
    this.taskList.push({task: event, checked: false});

  }




  public deleteItemTaskList(event: number) {
    this.taskList.splice(event,1);
  }

  public deleteAllTaskList(){
    const confirm = window.confirm ("Você deseja realmente deletar tudo??");
    if(confirm){
      this.taskList =[];
    }

  }

}
