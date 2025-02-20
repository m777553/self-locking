import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-congratulations',
  templateUrl: './congratulations.component.html',
  styleUrls: ['./congratulations.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class CongratulationsComponent {
  @Input() message: string = 'Дорогие коллеги и друзья из команды ОКБ!\n' +
    'С 23 февраля! Пусть ваши алгоритмы всегда работают без сбоев, а код компилируется с первого раза! Пусть каждый новый релиз будет успешным, а идеи для улучшения проекта приходят в голову в самый подходящий момент)) С праздником, команда ОКБ! Вы — лучшие! 🖥️🎉✨';
  @Input() isShown = false;
  @Output() close = new EventEmitter();
}
