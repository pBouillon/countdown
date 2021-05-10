import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: number | null): string {
    if (!value) value = 0;

    let seconds = value;

    let minutes = Math.floor(seconds / 60);
    seconds %= 60;

    let hours = Math.floor(minutes / 60);
    minutes %= 60;

    let days = Math.floor(hours / 24);
    hours %= 24;

    return days + ' d ' + hours + ' h ' + minutes + ' mn ' + seconds + ' sc';
  }

}
