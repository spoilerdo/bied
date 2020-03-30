import { Component, OnInit, Input } from '@angular/core';
import { Questionnaire } from 'src/app/models/questionnaire';
import { NbDialogService } from '@nebular/theme';
import { RemoveDialogComponent } from './remove-dialog/remove-dialog.component';

@Component({
  selector: 'app-questionnaire-card',
  templateUrl: './questionnaire-card.component.html',
  styleUrls: ['./questionnaire-card.component.scss'],
})
export class QuestionnaireCardComponent implements OnInit {
  @Input() questionnaire: Questionnaire;
  url = '';
  cardContextItems = [{ title: 'Rename' }, { title: 'Duplicate' }, { title: 'Delete' }];

  constructor(private dialogService: NbDialogService) {}

  ngOnInit(): void {
    // Match URL with real url
    this.url = `/questionnaire/${this.questionnaire.id}`;
  }

  openRemoveConfirmation() {
    this.dialogService.open(RemoveDialogComponent, { context: { questionnaire: this.questionnaire } });
  }
}
