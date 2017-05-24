import {Injectable} from '@angular/core';
import {TodoItem} from "./todo-item";

@Injectable()
export class TodoService {

    list: TodoItem[] = [];

    constructor() {
    }

    addItem(description: string) {
        const item:TodoItem = new TodoItem(description);
        this.list.push(item);
    }

    checkDone(item:TodoItem, done:boolean = true) {
        item.done = done;
    }
}
