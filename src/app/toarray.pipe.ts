import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toarray'
})
export class ToarrayPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
