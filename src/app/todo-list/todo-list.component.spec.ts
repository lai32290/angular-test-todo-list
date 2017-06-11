import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';
import { TodoListFilterComponent } from "../todo-list-filter/todo-list-filter.component";
import { TodoListFormComponent } from "../todo-list-form/todo-list-form.component";
import { TodoListListComponent } from "../todo-list-list/todo-list-list.component";
import { FormsModule } from "@angular/forms";

describe('TodoListComponent', () => {
    let component: TodoListComponent;
    let fixture: ComponentFixture<TodoListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ FormsModule ],
            declarations: [
                TodoListComponent,
                TodoListFilterComponent,
                TodoListFormComponent,
                TodoListListComponent
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TodoListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
