import {Injectable} from '@angular/core';
import {TodoItem} from "./todo-item";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class TodoService {

    private _list: BehaviorSubject<TodoItem[]> = new BehaviorSubject([]);

    get list() {
        return this._list.asObservable();
    }

    constructor() {

    }

    addItem(description: string) {
        const items = this._list.getValue();
        const item:TodoItem = new TodoItem(description);
        this._list.next(items.concat(item));
    }

    checkDone(item:TodoItem, done:boolean = true) {
        const items = this._list.getValue().filter(i => {
            if(i === item)
                return Object.assign({}, i, {done});
            return i;
        });
        this._list.next(items);
    }
}
