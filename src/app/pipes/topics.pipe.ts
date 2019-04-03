import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'topics'
})
export class TopicsPipe implements PipeTransform {

  transform(value: any[], args?: any): any {
    value.shift()
    return value;
  }

}
