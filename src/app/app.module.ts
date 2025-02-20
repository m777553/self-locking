import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomAlertComponent } from './components/custom-alert/custom-alert.component';
import { CaptchaComponent } from './components/captcha/captcha.component';
import { CaptchaSelectionComponent } from './components/captcha-selection/captcha-selection.component';
import { CongratulationsComponent } from './components/congratulations/congratulations.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CustomAlertComponent,
    CaptchaComponent,
    CaptchaSelectionComponent,
    CongratulationsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
