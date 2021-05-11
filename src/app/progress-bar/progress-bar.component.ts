import { OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Component } from '@angular/core';

/**
 * Display a progress bar up to a certain percentage
 */
@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  /**
   * Current progression, in percentages (from 0 to 100)
   */
  @Input()
  progression: number = 0;

  /**
   * Whether or not the current progression should be displayed on the progress
   * bar
   */
  @Input()
  showProgression: boolean = true;

  /**
   * Initialize the component and check the inputs' validity
   */
  ngOnInit(): void {
    if (this.progression < 0 || this.progression > 100) {
      throw new Error('The progression must be between 0 and 100');
    }
  }

}
