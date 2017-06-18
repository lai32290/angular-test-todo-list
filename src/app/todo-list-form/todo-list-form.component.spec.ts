import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { TodoListFormComponent } from './todo-list-form.component';
import { AppModule } from '../app.module';
import { By } from '@angular/platform-browser';
import { DebugElement } from "@angular/core";

describe('TodoListFormComponent', () => {
    let component: TodoListFormComponent;
    let fixture: ComponentFixture<TodoListFormComponent>;

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

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should bind search text', () => {
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
});
