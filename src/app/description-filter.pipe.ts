import { Pipe, PipeTransform } from '@angular/core';
import { TodoItem } from "./todo-item";

@Pipe({
  name: 'descriptionFilter'
})
export class DescriptionFilterPipe implements PipeTransform {

  transform(items: TodoItem[], str: string): TodoItem[]{
      return items.filter(item => item.description.toLowerCase().includes(str.toLowerCase()));
  }

}
