import { Component, OnInit, Input } from '@angular/core';
import {TodoService} from "../todo.service";
import {TodoItem} from "../todo-item";

@Component({
  selector: 'app-todo-list-list',
  templateUrl: './todo-list-list.component.html',
  styleUrls: ['./todo-list-list.component.css']
})
export class TodoListListComponent implements OnInit {

  @Input()
  list: TodoItem[] = [];

  constructor(private todoService:TodoService) {
  }

  checkDone(item) {
    this.todoService.checkDone(item, !item.done);
  }

  ngOnInit() {
  }

}
