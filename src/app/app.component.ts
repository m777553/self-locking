import { Component } from '@angular/core';
import {CONTENT} from "./content.const";
import {IContent} from "./app.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'self-locking';
  content = CONTENT
  todaySelfLocking: IContent = {
    image: '🙅‍♂️',
    title: ''
  }

  choseSelfLocking(){
    const randomIndex = Math.floor(Math.random() * this.content.length);
    this.todaySelfLocking = {...this.content[randomIndex]};
  }
  copyToClipboard() {
    navigator.clipboard.writeText(this.todaySelfLocking.title).then(() => {
      alert('Ваш самозапрет скопирован в буфер обмена!');
    }).catch(err => {
      console.error('Ошибка при копировании текста: ', err);
    });
  }
}
