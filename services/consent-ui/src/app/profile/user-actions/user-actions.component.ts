import { Component, OnInit, TemplateRef } from '@angular/core';
import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'app-user-actions',
  templateUrl: './user-actions.component.html',
  styleUrls: ['./user-actions.component.scss']
})
export class UserActionsComponent implements OnInit {

  constructor(private readonly dialogService: NbDialogService) { }

  ngOnInit(): void {
  }

  open(dialog: TemplateRef<any>) {
    console.log('Open clicked');
    this.dialogService.open(dialog, { context: 'this is some additional data passed to dialog' }).onClose.subscribe(bool => console.log('bool', bool))
  }
}
