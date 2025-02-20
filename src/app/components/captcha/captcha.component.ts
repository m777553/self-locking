import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-captcha',
  templateUrl: './captcha.component.html',
  styleUrls: ['./captcha.component.scss'],
  standalone: true,
})
export class CaptchaComponent {
  @Output() show = new EventEmitter();

  showCaptcha() {
    this.show.emit();
  }
}
