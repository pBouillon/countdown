import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit, OnDestroy {

  @Input()
  from: Date = new Date();

  @Input()
  to: Date = new Date();

  progression = new BehaviorSubject<number>(0);

  remainingSeconds = new BehaviorSubject<number>(0);

  subscription = new Subscription();

  constructor() { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = interval(1000).subscribe(_ => {
        const remainingSeconds = this.computeRemainingTime();
        this.remainingSeconds.next(remainingSeconds);

        const currentProgress = this.computeRemainingProgress();
        this.progression.next(currentProgress);
      });
  }

  private computeRemainingProgress(decimals = 2): number {
    const totalSeconds = Math.floor((this.to.valueOf() - this.from.valueOf()) / 1_000);
    const remainingSeconds = this.remainingSeconds.value;

    let currentProgression = 100 * remainingSeconds / totalSeconds;

    if (currentProgression > 100) currentProgression = 100;

    const truncated = Math.floor(currentProgression * Math.pow(10, decimals)) / Math.pow(10, decimals);
    return truncated;
  }

  private computeRemainingTime(): number {
    const millisecondsDiff = this.to.valueOf() - new Date().valueOf();
    const secondsDiff = Math.floor(millisecondsDiff / 1_000);

    return secondsDiff;
  }
}
