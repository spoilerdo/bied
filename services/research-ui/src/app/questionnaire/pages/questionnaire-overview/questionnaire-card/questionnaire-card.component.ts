import { Component, OnInit, Input, Output } from '@angular/core';
import { Questionnaire } from 'src/app/models/questionnaire';
import { NbDialogService, NbMenuService } from '@nebular/theme';
import { RemoveDialogComponent } from './remove-dialog/remove-dialog.component';
import { EventEmitter } from '@angular/core';
import { RenameDialogComponent } from './rename-dialog/rename-dialog.component';

@Component({
  selector: 'app-questionnaire-card',
  templateUrl: './questionnaire-card.component.html',
  styleUrls: ['./questionnaire-card.component.scss'],
})
export class QuestionnaireCardComponent implements OnInit {
  @Input() questionnaire: Questionnaire;
  @Output() removeQuestionnaireCallback: EventEmitter<any> = new EventEmitter();
  @Output() renameQuestionnaireCallback: EventEmitter<any> = new EventEmitter();

  url = '';
  cardContextItems = [{ title: 'Share' }, { title: 'Edit' }, { title: 'View data' }, { title: 'Download data' }];

  constructor(private dialogService: NbDialogService, private menuService: NbMenuService) {}

  ngOnInit(): void {
    // Match URL with real url
    this.url = `/questionnaire/${this.questionnaire.id}`;

    this.menuService.onItemClick().subscribe(event => {
      if (event.item.title === 'Share') {
        console.log('share clicked');
      } else if (event.item.title === 'Edit') {
        console.log('Edit clicked');
      } else if (event.item.title === 'View data') {
        console.log('View data clicked');
      } else if (event.item.title === 'Download data') {
        console.log('Download data clicked');
      }
    });
  }

  openRemoveConfirmation() {
    this.dialogService
      .open(RemoveDialogComponent, { context: { questionnaire: this.questionnaire } })
      .onClose.subscribe(removable => removable && this.removeQuestionnaire(removable));
  }

  openRenameDialog() {
    this.dialogService
      .open(RenameDialogComponent, { context: { questionnaire: this.questionnaire } })
      .onClose.subscribe(name => name && this.renameQuestionnaire(name));
  }

  removeQuestionnaire(remove: boolean) {
    if (remove === true) {
      this.removeQuestionnaireCallback.emit(this.questionnaire.id);
    }
  }

  renameQuestionnaire(newName: string) {
    if (newName) {
      this.renameQuestionnaireCallback.emit({ name: newName, id: this.questionnaire.id });
    }
  }
}
