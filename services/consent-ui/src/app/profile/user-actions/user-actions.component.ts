import { Component, OnInit, TemplateRef } from '@angular/core';
import { NbDialogService, NbToastrService, NbToastrConfig, NbComponentStatus } from '@nebular/theme';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-user-actions',
  templateUrl: './user-actions.component.html',
  styleUrls: ['./user-actions.component.scss']
})
export class UserActionsComponent implements OnInit {

  constructor(private readonly dialogService: NbDialogService, private readonly toastService: NbToastrService) { }

  ngOnInit(): void {
  }

  deleteAllConsent() {
    this.dialogService.open(ConfirmationModalComponent, { context: { text: 'Are you sure you wanna delete all consents?', title: 'Delete all consent' } })
      .onClose.subscribe((result: any) => {
        if (result) {
          // TODO try to delete all consenst here
          const succesfull: boolean = true; // Placeholder for succesfully deleted
          const status = succesfull ? "success" : "danger";

          if (succesfull) {
            this.toastService.show('Succesfully deleted all consents', `Success`, { status })
          } else {
            this.toastService.show('Failed to delete all consents', 'Failed', { status })
          }
        }
      })
  }

  deleteAllData() {
    this.dialogService.open(ConfirmationModalComponent, { context: { text: 'Are you sure you wanna delete all data and consent?' , title: 'Delete all data'} })
      .onClose.subscribe((result: any) => {
        if (result) {
          // TODO try to delete all consenst here
          const succesfull: boolean = true; // Placeholder for succesfully deleted
          const status = succesfull ? "success" : "danger";

          if (succesfull) {
            this.toastService.show('Succesfully deleted all consents', `Success`, { status })
            this.toastService.show('Succesfully deleted all data', `Success`, { status })
          } else {
            this.toastService.show('Failed to delete all consents', 'Failed', { status })
            this.toastService.show('Failed to delete all data', 'Failed', { status })
          }
        }
      })
  }
}
