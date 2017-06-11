import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListFilterComponent } from './todo-list-filter.component';
import { FormsModule } from "@angular/forms";

describe('TodoListFilterComponent', () => {
    let component: TodoListFilterComponent;
    let fixture: ComponentFixture<TodoListFilterComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ FormsModule ],
            declarations: [ TodoListFilterComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TodoListFilterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
