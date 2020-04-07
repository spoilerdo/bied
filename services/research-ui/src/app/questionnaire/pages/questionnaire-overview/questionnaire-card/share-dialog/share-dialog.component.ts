import { Component, OnInit } from '@angular/core';
import { NbComponentStatus, NbDialogRef, NbToastrService } from '@nebular/theme';
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

  constructor(protected dialogRef: NbDialogRef<ShareDialogComponent>, protected toastService: NbToastrService) {
  }

  ngOnInit(): void {
    console.log(this.questionnaire);
  }

  close() {
    this.dialogRef.close();
  }

  send() {
    if (this.emails.length > 0) {
      // TODO: Send mails
      this.presentToast('success', 'Email send', 'The emails are send successfully');
      this.close();
    } else {
      this.presentToast('danger', 'Failed', 'Please provide some email addresses!');
    }
  }

  addEmail() {
    if (this.newEmail !== '') {
      if (this.validateEmail(this.newEmail)) {
        this.emails.push(this.newEmail);
        this.newEmail = '';
      } else {
        this.presentToast('danger', 'Error', 'Not a valid email');
      }
    } else {
      this.presentToast('danger', 'Error', 'Email can not be empty');
    }
  }

  onKeydown(event) {
    if (event.key === 'Enter') {
      this.addEmail();
    }
  }

  presentToast(status: NbComponentStatus, title: string, message: string) {
    this.toastService.show(message, title, { status });
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  removeEmail(email: any) {
    this.emails.splice(this.emails.indexOf(email), 1);
  }
}
