import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByString'
})
export class FilterByStringPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
