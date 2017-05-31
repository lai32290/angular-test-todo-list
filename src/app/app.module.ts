import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {TodoListFormComponent} from './todo-list-form/todo-list-form.component';
import {TodoListListComponent} from './todo-list-list/todo-list-list.component';
import { TodoService } from './todo.service';
import { DonePipe } from './done.pipe';
import { TodoListFilterComponent } from './todo-list-filter/todo-list-filter.component';

@NgModule({
    declarations: [
        AppComponent,
        TodoListComponent,
        TodoListFormComponent,
        TodoListListComponent,
        DonePipe,
        TodoListFilterComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [
        TodoService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
