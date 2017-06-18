import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListListComponent } from './todo-list-list.component';
import { AppModule } from '../app.module';
import { TodoItem } from "../todo-item";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

describe('TodoListListComponent', () => {
    let component: TodoListListComponent;
    let fixture: ComponentFixture<TodoListListComponent>;

    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ AppModule ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TodoListListComponent);
        component = fixture.componentInstance;

        de = fixture.debugElement.query(By.css('ul'));
        el = de.nativeElement;
    });

    it('should contains "Hello" and "World" text', () => {
        component.list = [
            new TodoItem('Hello'),
            new TodoItem('World')
        ];
        fixture.detectChanges();
        expect(el.textContent).toContain('Hello');
        expect(el.textContent).toContain('World');
    });

    it('should contains "No item in the list"', () => {
        component.list = [];
        fixture.detectChanges();
        expect(el.textContent).toContain('No item in the list');
    });

    it('should contain "Hello" and be done', () => {
        component.list = [
            new TodoItem('Hello', true),
            new TodoItem('World', false)
        ];
        fixture.detectChanges();
        fixture.whenStable()
            .then(() => {
                let checks:DebugElement[] = de.queryAll(By.css('input'));

                for(let key in checks) {
                    expect(checks[key].nativeElement.checked).toBe(component.list[key].done);
                }
            });

    });

});
