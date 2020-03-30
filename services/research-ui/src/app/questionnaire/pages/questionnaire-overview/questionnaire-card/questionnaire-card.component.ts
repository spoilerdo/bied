import { Component, OnInit, Input, Output } from '@angular/core';
import { Questionnaire } from 'src/app/models/questionnaire';
import { NbDialogService } from '@nebular/theme';
import { RemoveDialogComponent } from './remove-dialog/remove-dialog.component';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-questionnaire-card',
  templateUrl: './questionnaire-card.component.html',
  styleUrls: ['./questionnaire-card.component.scss'],
})
export class QuestionnaireCardComponent implements OnInit {
  @Input() questionnaire: Questionnaire;
  @Output() removeQuestionnaire: EventEmitter<any> = new EventEmitter();

  url = '';
  cardContextItems = [{ title: 'Rename' }, { title: 'Duplicate' }, { title: 'Delete' }];

  constructor(private dialogService: NbDialogService) {}

  ngOnInit(): void {
    // Match URL with real url
    this.url = `/questionnaire/${this.questionnaire.id}`;
  }

  openRemoveConfirmation() {
    this.dialogService
      .open(RemoveDialogComponent, { context: { questionnaire: this.questionnaire } })
      .onClose.subscribe(removable => removable && this.remove(removable));
  }

  remove(remove: boolean) {
    if (remove === true) {
      this.removeQuestionnaire.emit(this.questionnaire.id);
    }
  }
}
