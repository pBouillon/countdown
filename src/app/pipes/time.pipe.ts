import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  /**
   * Format a number of second to a human readable sentence
   * @param value Number of seconds from which the time will be evaluated
   * @returns A sentence with the formatted time in a human readable format
   */
  transform(value: number | null): string {
    let seconds = value ?? 0;

    if (seconds < 0) {
      throw new Error('The number of seconds should be equal or greater than 0');
    }

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
