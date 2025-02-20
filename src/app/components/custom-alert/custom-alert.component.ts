import {Component, Input} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-custom-alert',
  templateUrl: './custom-alert.component.html',
  styleUrls: ['./custom-alert.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class CustomAlertComponent {
  @Input() message: string = '';
  isVisible: boolean = false;

  showAlert(msg: string) {
    this.message = msg;
    this.isVisible = true;
    setTimeout(() => this.closeAlert(), 3000); // Авто-закрытие через 3 секунды
  }

  closeAlert() {
    this.isVisible = false;
  }
}
