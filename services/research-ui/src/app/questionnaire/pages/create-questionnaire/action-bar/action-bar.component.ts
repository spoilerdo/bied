import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss'],
})
export class ActionBarComponent {
  @Output() addQuestion: EventEmitter<void> = new EventEmitter<void>();
  @Output() saveQuestionnaire: EventEmitter<void> = new EventEmitter<void>();
}
