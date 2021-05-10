import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: number): string {
    let seconds = value;

    let minutes = Math.floor(seconds / 60);
    seconds %= 60;

    let hours = Math.floor(minutes / 60);
    minutes %= 60;

    let days = Math.floor(hours / 24);
    hours %= 24;

    return days + ' day' + (days > 1 ? 's' : '') + ' '
      + hours + ' hour' + (hours > 1 ? 's' : '') + ' '
      + minutes + ' minute' + (minutes > 1 ? 's' : '') + ' '
      + ' and '
      + seconds + ' second' + (seconds > 1 ? 's' : '');
  }

}
