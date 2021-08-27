import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  /**
   * Date of the target event
   */
  readonly eventDate = new Date('2021-08-31T17:30:00');

  /**
   * Date at which the countdown will be started
   */
  readonly startingDate = new Date('2019-09-01T08:30:00');

}
