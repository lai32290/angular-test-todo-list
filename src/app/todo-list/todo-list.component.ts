import { Component, OnInit } from '@angular/core';
import {TodoService} from "../todo.service";
import {TodoItem} from "../todo-item";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  list: TodoItem[] = [];

  constructor(private todoService:TodoService) {
    todoService.list
        .subscribe(list => {
          this.list = list;
        });
  }

  ngOnInit() {
  }

}
