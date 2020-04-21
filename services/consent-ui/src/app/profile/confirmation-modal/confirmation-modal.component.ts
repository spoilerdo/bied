import { Component, OnInit, TemplateRef } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss']
})
export class ConfirmationModalComponent implements OnInit {

  text: string;
  title: string;

  constructor(protected dialogRef: NbDialogRef<any>) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }
}
