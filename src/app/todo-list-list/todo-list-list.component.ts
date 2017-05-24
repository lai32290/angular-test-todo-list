import { Component, OnInit } from '@angular/core';
import {TodoService} from "../todo.service";
import {TodoItem} from "../todo-item";

@Component({
  selector: 'app-todo-list-list',
  templateUrl: './todo-list-list.component.html',
  styleUrls: ['./todo-list-list.component.css']
})
export class TodoListListComponent implements OnInit {

  list: TodoItem[];

  constructor(private todoService:TodoService) {
    this.list = todoService.list;
  }

  ngOnInit() {
  }

}
