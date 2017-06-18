import { TestBed, inject } from '@angular/core/testing';

import { TodoService } from './todo.service';
import { TodoItem } from "./todo-item";

describe('TodoService', () => {
    let list: TodoItem[];

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [TodoService]
        });

        list = [];
    });
    
    it('should add new item when addItem function is called', inject([TodoService], (service: TodoService) => {
        let description = 'A new Item';
        service.addItem(description);
        service.list
            .subscribe(_list => {
                list = _list;
            });
        
        let itemInList = list.some(item => {
            return item.description == description;
        });
        expect(itemInList).toBeTruthy();
    }));

    it('should to change item done states when checkDone function is called', inject([TodoService], (service: TodoService) => {
        let description = 'Another new Item';
        service.addItem(description);

        service.list
            .subscribe(_list => {
                list = _list;
            });

        service.checkDone(list[0], true);
        expect(list[0].done).toBeTruthy();
    }));
});
