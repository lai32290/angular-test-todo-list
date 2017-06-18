import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';
import { FormsModule } from "@angular/forms";
import { AppModule } from '../app.module';
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { TodoItem } from "../todo-item";

describe('TodoListComponent', () => {
    let component: TodoListComponent;
    let fixture: ComponentFixture<TodoListComponent>;

    let de: DebugElement;
    let listTodo;
    let listDone;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ FormsModule, AppModule ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TodoListComponent);
        component = fixture.componentInstance;

        de = fixture.debugElement.query(By.css('.todo-list'));
        listTodo = de.query(By.css('.list-todo')).nativeElement;
        listDone = de.query(By.css('.list-done')).nativeElement;
    });

    it('should to bind searchText variable', () => {
        let el = de.query(By.css('app-todo-list-filter input')).nativeElement;
        let oldSearchText = el.value;

        component.searchText = "filter me";
        fixture.detectChanges();

        fixture.whenStable()
            .then(() => {
                expect(el.value).not.toBe(oldSearchText);
                expect(el.value).toBe(component.searchText);
            });
    });

    it('should to bind list variable', () => {
        component.list = [
            new TodoItem('I\'m item 1', false),
            new TodoItem('My name is item 2', false),
            new TodoItem('item 3', true)
        ];
        fixture.detectChanges();

        fixture.whenStable()
            .then(() => {
                expect(listTodo.textContent).toContain(component.list[0].description);
                expect(listTodo.textContent).toContain(component.list[1].description);

                expect(listDone.textContent).toContain(component.list[2].description);
            });
    });

    it('list should be filterble', () => {
        component.list = [
            new TodoItem('I\'m item 1', false),
            new TodoItem('My name is item 2', false),
            new TodoItem('item 3', true)
        ];
        component.searchText = 'item 1';
        fixture.detectChanges();

        fixture.whenStable()
            .then(() => {
                expect(listTodo.textContent).not.toContain(component.list[1].description);
                expect(listTodo.textContent).toContain(component.list[0].description);
                expect(listDone.textContent).not.toContain(component.list[2].description);
            });
    });
});
