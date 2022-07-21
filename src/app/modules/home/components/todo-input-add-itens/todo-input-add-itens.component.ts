import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent implements OnInit {

  @Output()  public emitItemTaskList = new EventEmitter();

  /**
   * addItemTaskList
   */
  public addItemTaskList: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * submitItemTaskLIst */
  public submitItemTaskList(){


    this.addItemTaskList = this.addItemTaskList.trim();
    if(this.addItemTaskList){
     this.emitItemTaskList.emit(this.addItemTaskList);
       this.addItemTaskList="";
    }

  }



}
