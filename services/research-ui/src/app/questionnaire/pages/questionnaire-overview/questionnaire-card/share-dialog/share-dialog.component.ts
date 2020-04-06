import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { Questionnaire } from '../../../../../models/questionnaire';

@Component({
  selector: 'app-share-dialog',
  templateUrl: './share-dialog.component.html',
  styleUrls: ['./share-dialog.component.scss'],
})
export class ShareDialogComponent implements OnInit {
  questionnaire: Questionnaire;
  emails = [];
  newEmail = '';

  constructor(protected dialogRef: NbDialogRef<ShareDialogComponent>) {
  }

  ngOnInit(): void {
    console.log(this.questionnaire);
  }

  close() {
    this.dialogRef.close();
  }

  send() {
    console.log(this.emails);
  }

  addEmail() {
    if (this.newEmail !== '') {
      if (this.validateEmail(this.newEmail)) {
        this.emails.push(this.newEmail);
        this.newEmail = '';
      } else {
        // TODO: Throw error
        console.log('Not a valid email');
      }
    } else {
      // TODO: Throw error
      console.log('Cannot be empty');
    }
  }

  onKeydown(event) {
    if (event.key === 'Enter') {
      this.addEmail();
    }
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
}
