import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  readonly eventDate = new Date('2021-09-01');

  readonly startingDate = new Date('2019-09-01');

}
