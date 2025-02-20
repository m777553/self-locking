import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomAlertComponent } from './components/custom-alert/custom-alert.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CustomAlertComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
