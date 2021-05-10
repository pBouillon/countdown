import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { TimePipe } from './pipes/time.pipe';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    TimePipe,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
