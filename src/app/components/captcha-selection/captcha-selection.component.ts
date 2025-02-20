import {Component, EventEmitter, Output} from '@angular/core';
import {CommonModule} from "@angular/common";
import {CAPTCHA_SELECT_DATA} from "./captcha-selection.const";

@Component({
  selector: 'app-captcha-selection',
  templateUrl: './captcha-selection.component.html',
  styleUrls: ['./captcha-selection.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class CaptchaSelectionComponent {
  @Output() selected = new EventEmitter<boolean | null>();
  images = this.shuffleArray(CAPTCHA_SELECT_DATA)


  onImgClick(img: { src: string, hasBall: boolean | null }) {
    this.selected.emit(img.hasBall)
  }

  private shuffleArray(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Меняем местами
    }
    return array;
  }
}

