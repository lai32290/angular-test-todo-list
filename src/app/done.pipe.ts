import { Pipe, PipeTransform } from '@angular/core';
import {TodoItem} from "./todo-item";

@Pipe({
  name: 'done'
})
export class DonePipe implements PipeTransform {

  transform(items: TodoItem[], done: boolean = true): any {
    console.log(arguments);
    return items.filter(i => i.done == done);
  }

}
