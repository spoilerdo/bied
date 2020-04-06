import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { Questionnaire } from '../../../../../models/questionnaire';

@Component({
  selector: 'app-share-dialog',
  templateUrl: './share-dialog.component.html',
  styleUrls: ['./share-dialog.component.scss']
})
export class ShareDialogComponent implements OnInit {
  questionnaire: Questionnaire;

  constructor(protected dialogRef: NbDialogRef<ShareDialogComponent>) { }

  ngOnInit(): void {
    console.log(this.questionnaire);
  }

  close() {
    this.dialogRef.close();
  }
}
