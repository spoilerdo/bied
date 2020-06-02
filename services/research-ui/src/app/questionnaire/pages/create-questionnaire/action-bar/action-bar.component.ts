import { Component, EventEmitter, Output } from '@angular/core';
import { CreateQuestionnaireService } from '../create-questionnaire.service';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss'],
})
export class ActionBarComponent {
  @Output() addQuestionGroup: EventEmitter<void> = new EventEmitter<void>();
  @Output() saveQuestionnaire: EventEmitter<void> = new EventEmitter<void>();

  constructor(public readonly createQuestionnaireService: CreateQuestionnaireService) {}
}
