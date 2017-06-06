import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list-filter',
  templateUrl: './todo-list-filter.component.html',
  styleUrls: ['./todo-list-filter.component.css']
})
export class TodoListFilterComponent implements OnInit {
  @Input()
  public model: string;

  constructor() { }

  ngOnInit() {
  }

}
