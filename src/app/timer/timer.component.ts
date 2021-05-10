import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit, OnDestroy {

  remainingSeconds = new BehaviorSubject<number>(0);

  subscription = new Subscription();

  @Input()
  to: Date = new Date();

  @Input()
  from: Date = new Date();

  constructor() { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = interval(1000).subscribe(_ => {
        const millisecondsDiff = this.to.getTime() - this.from.getTime()
        const secondsDiff = Math.floor(millisecondsDiff / 1000);
        this.remainingSeconds.next(secondsDiff);
      });
  }

}
