import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { Questionnaire } from 'src/app/models/questionnaire';

@Component({
  selector: 'app-rename-dialog',
  templateUrl: './rename-dialog.component.html',
  styleUrls: ['./rename-dialog.component.scss'],
})
export class RenameDialogComponent implements OnInit {
  questionnaire: Questionnaire;
  oldTitle: string;
  newTitle = '';

  constructor(protected dialogRef: NbDialogRef<RenameDialogComponent>) {}

  ngOnInit(): void {}

  close() {
    this.dialogRef.close();
  }

  rename() {
    this.dialogRef.close(this.newTitle);
  }
}
