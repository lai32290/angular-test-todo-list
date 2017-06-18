import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { TodoListFormComponent } from './todo-list-form.component';
import { AppModule } from '../app.module';
import { By } from '@angular/platform-browser';
import { DebugElement } from "@angular/core";
import { TodoService } from "../todo.service";

describe('TodoListFormComponent', () => {
    let component: TodoListFormComponent;
    let fixture: ComponentFixture<TodoListFormComponent>;
    let todoService: TodoService;

    let de: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ FormsModule, AppModule ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TodoListFormComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('form'));
        todoService = TestBed.get(TodoService);

        fixture.detectChanges();
    });

    it('should bind description text', () => {
        component.description = 'some description';
        fixture.detectChanges();

        let el = de.query(By.css('input[name=description]')).nativeElement;

        fixture.whenStable()
            .then(() => {
                expect(el.value).toBe('some description');
            });
    });

    it('form input should be empty after call add function', () => {
        component.description = 'some description';
        component.add();
        fixture.detectChanges();

        let el = de.query(By.css('input[name=description]')).nativeElement;

        fixture.whenStable()
            .then(() => {
                expect(el.value).toBe('');
            });
    });

    it('should add new item in the service list with description inserted after add() function be called', () => {
        component.description = "I am a new Item to do";
        component.add();
        todoService.list
            .subscribe(list => {
                expect(list[0].description).toBeTruthy();
            });
    });
});
