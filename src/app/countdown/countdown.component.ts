import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription, timer } from 'rxjs';

/**
 * Display a countdown from a date to another (number of days, hours, etc.)
 * The time is dynamically updated each seconds
 */
@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit, OnDestroy {

  /**
   * The date from which the countdown should start
   */
  @Input()
  from = new Date();

  /**
   * Whether or not a progress bar should be displayed along with the countdown
   */
  @Input()
  showProgress = false;

  /**
   * The countdown target's date
   */
  @Input()
  to = new Date();

  /**
   * Current progression, in percentages
   */
  progression = new BehaviorSubject<number>(0);

  /**
   * Number of remaining seconds before reaching the countdown's target
   */
  remainingSeconds = new BehaviorSubject<number>(0);

  /**
   * Inner-subscription updating the countdown each seconds
   */
  private subscription = new Subscription();

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    if (this.from.getTime() > this.to.getTime()) {
      throw new Error('The timer\'s deadline must be later than it\'s beginning');
    }

    this.subscription = timer(0, 1_000).subscribe(_ => {
        const remainingSeconds = this.computeRemainingTime();
        this.remainingSeconds.next(remainingSeconds);

        const currentProgress = this.computeProgression();
        this.progression.next(currentProgress);
      });
  }

  /**
   * Compute the current progression, in percentages
   * @param decimals Number of decimals to display
   * @returns A percentage representing the current progression,
   *          between 0 and 100
   */
  private computeProgression(decimals = 2): number {
    if (decimals < 0) {
      throw new Error('The number of decimals should be greater than 0');
    }

    const completeDurationSeconds = Math.floor((this.to.getTime() - this.from.getTime()) / 1_000);
    const elapsedSeconds = completeDurationSeconds - this.remainingSeconds.value;

    let currentProgression = 100 * elapsedSeconds / completeDurationSeconds;
    if (currentProgression > 100) currentProgression = 100;

    const roundingCoefficient = Math.pow(10, decimals);
    const truncated = Math.floor(currentProgression * roundingCoefficient) / roundingCoefficient;

    return truncated;
  }

  /**
   * Compute the remaining number of seconds before reaching the event
   * @returns The number of second to be elapsed before reaching the target
   */
  private computeRemainingTime(): number {
    const millisecondsDiff = this.to.getTime() - new Date().getTime();
    const secondsDiff = Math.floor(millisecondsDiff / 1_000);

    return secondsDiff;
  }

}
