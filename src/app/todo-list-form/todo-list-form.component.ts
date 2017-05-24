import {Component, OnInit} from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
    selector: 'app-todo-list-form',
    templateUrl: './todo-list-form.component.html',
    styleUrls: ['./todo-list-form.component.css']
})
export class TodoListFormComponent implements OnInit {

    description: string = '';

    constructor(private todoService:TodoService) {
    }

    ngOnInit() {
    }

    add() {
        if(this.description.trim() == "")
            return;

        this.todoService.addItem(this.description);
        this.emptyDescription();
    }

    private emptyDescription(){
        this.description = '';
    }
}
