import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListListComponent } from './todo-list-list.component';
import { AppModule } from '../app.module';

describe('TodoListListComponent', () => {
  let component: TodoListListComponent;
  let fixture: ComponentFixture<TodoListListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AppModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
