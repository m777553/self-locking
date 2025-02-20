import {Component} from '@angular/core';
import {CONTENT, MESSAGE} from "./content.const";
import {IContent} from "./app.interface";
import {CustomAlertComponent} from "./components/custom-alert/custom-alert.component";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'self-locking';
  content = CONTENT;
  todaySelfLocking: IContent = {
    image: '🙅‍♂️',
    title: ''
  };
  isTextVisible = false; // Для отслеживания видимости текста
  isCaptchaSelectionShown = false;
  isCongratulationShown$ = new BehaviorSubject<boolean>(false);
  message: string = ''

  constructor() {
    console.error('Наши неудержимые блюстители чистоты кода и отладки! Мы и здесь рады вас видеть и хотим поздравить с 23 февраля!')
  }

  choseSelfLocking() {
    const iterations = 10; // Количество смен текстов
    const interval = 100; // Интервал между сменами (в миллисекундах)

    let count = 0;
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * this.content.length);
      this.todaySelfLocking = {...this.content[randomIndex]};
      count++;

      if (count === iterations) {
        clearInterval(intervalId);
        this.isTextVisible = true; // Показать последний текст
      }
    }, interval);
  }

  copyToClipboard(alert: CustomAlertComponent) {
    // Создаем временный элемент textarea
    const textArea = document.createElement('textarea');
    textArea.value = this.todaySelfLocking.title; // Устанавливаем текст для копирования
    document.body.appendChild(textArea); // Добавляем элемент в DOM
    textArea.select(); // Выбираем текст
    textArea.setSelectionRange(0, 99999); // Для мобильных устройств

    // Пытаемся скопировать текст
    try {
      const successful = document.execCommand('copy'); // Копируем текст
      if (successful) {
        alert.showAlert('Ваш самозапрет скопирован в буфер обмена!');
      } else {
        alert.showAlert('Не удалось скопировать текст.');
      }
    } catch (err) {
      console.error('Ошибка при копировании текста: ', err);
      alert.showAlert('Ошибка при копировании текста!');
    }

    // Удаляем временный элемент
    document.body.removeChild(textArea);
  }

  showCaptchaSelection() {
    this.isCaptchaSelectionShown = true;
  }

  selectCongratulation(selectedCongratulation: boolean | null) {
    this.isCaptchaSelectionShown = false;
    if (selectedCongratulation === null) {
      this.message = MESSAGE.lk;
    }
    if (selectedCongratulation) {
      this.message = MESSAGE.all
    }
    if (selectedCongratulation === false) {
      this.message = MESSAGE.error
    }
    this.isCongratulationShown$.next(true)
  }
}
