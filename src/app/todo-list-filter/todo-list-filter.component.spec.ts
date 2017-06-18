import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListFilterComponent } from './todo-list-filter.component';
import { FormsModule } from "@angular/forms";
import { AppModule } from '../app.module';
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

describe('TodoListFilterComponent', () => {
    let component: TodoListFilterComponent;
    let fixture: ComponentFixture<TodoListFilterComponent>;

    let de: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ FormsModule, AppModule ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TodoListFilterComponent);
        component = fixture.componentInstance;

        de = fixture.debugElement.query(By.css('input[name=description_filter]'));
        fixture.detectChanges();
    });

    it('should bind model variable', () => {
        component.model = "filter me";
        fixture.detectChanges();
        fixture.whenStable()
            .then(() => {
                let el = de.nativeElement;
                expect(el.value).not.toBe("");
                expect(el.value).toBe(component.model);
            });
    });
});
