import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  @Input()
  from: Date = new Date();

  @Input()
  to: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  get remainingSeconds(): number {
    const millisecondsDiff = this.to.valueOf() - this.from.valueOf()
    const secondsDiff = Math.floor(millisecondsDiff / 1000);
    return secondsDiff;
  }

}
