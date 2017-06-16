import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { TodoListFormComponent } from './todo-list-form.component';
import { AppModule } from '../app.module';
import { By } from '@angular/platform-browser';
import { DebugElement } from "@angular/core/src/debug/debug_node";

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

        let el = de.query(By.css('input[name=description]'));

        fixture.whenStable()
            .then(() => {
                expect(el.nativeElement.value).toBe('some description');
            });
    });



});
