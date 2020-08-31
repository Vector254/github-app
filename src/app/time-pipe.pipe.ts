import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePipe'
})
export class TimePipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
        const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
        if (seconds < 29)
            return 'Just now';
        const intervals = {
            'years': 31536000,
            'months': 2592000,
            'weeks': 604800,
            'days': 86400,
            'hours': 3600,
            'minutes': 60,
            'seconds': 1
        };
        let counter;
        for (const i in intervals) {
            counter = Math.floor(seconds / intervals[i]);
            if (counter > 0)
                if (counter === 1) {
                    return counter + ' ' + i ;
                } else {
                    return counter + ' ' + i ;
                }
        }
    }
    return value;
    }
  }


