import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { Questionnaire } from 'src/app/models/questionnaire';

@Component({
  selector: 'app-remove-dialog',
  templateUrl: './remove-dialog.component.html',
  styleUrls: ['./remove-dialog.component.scss'],
})
export class RemoveDialogComponent implements OnInit {
  questionnaire: Questionnaire;
  typedTitle: string;

  constructor(protected dialogRef: NbDialogRef<RemoveDialogComponent>) {}

  ngOnInit(): void {}

  close() {
    this.dialogRef.close();
  }

  remove() {
    this.dialogRef.close(true);
  }
}
