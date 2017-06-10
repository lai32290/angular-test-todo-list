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
import { DescriptionFilterPipe } from './description-filter.pipe';
import { TagInputComponent } from './tag-input/tag-input.component';
import { TagListComponent } from './tag-list/tag-list.component';
import { TagOptionsComponent } from './tag-options/tag-options.component';
import { FilterByStringPipe } from './filter-by-string.pipe';

@NgModule({
    declarations: [
        AppComponent,
        TodoListComponent,
        TodoListFormComponent,
        TodoListListComponent,
        DonePipe,
        TodoListFilterComponent,
        DescriptionFilterPipe,
        TagInputComponent,
        TagListComponent,
        TagOptionsComponent,
        FilterByStringPipe,
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
