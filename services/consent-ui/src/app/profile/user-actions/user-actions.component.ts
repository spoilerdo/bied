import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { NbDialogService, NbToastrService, NbToastrConfig, NbComponentStatus } from '@nebular/theme';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';
import { DatasourceProvider } from 'src/app/providers/datasource.provider';
import { ConsentProvider } from 'src/app/providers/consent.provider';

@Component({
  selector: 'app-user-actions',
  templateUrl: './user-actions.component.html',
  styleUrls: ['./user-actions.component.scss']
})
export class UserActionsComponent implements OnInit {

  @Input() id: string;

  constructor(
    private readonly dialogService: NbDialogService,
    private readonly toastService: NbToastrService,
    private readonly datasourceService: DatasourceProvider,
    private readonly consentService: ConsentProvider
    ) { }

  ngOnInit(): void { }

  deleteAllConsent() {
    this.dialogService.open(ConfirmationModalComponent, { context: { text: 'Are you sure you wanna delete all consents?', title: 'Delete all consent' } })
      .onClose.subscribe((result: any) => {
        if (result) {          
          this.consentService.deleteAllConsent(this.id).subscribe(result => {
            let succesfull: boolean = null;

            if (result)
              succesfull = true;

            const status = succesfull ? "success" : "danger";

            if (succesfull) {
              this.toastService.show('Succesfully deleted all consents', `Success`, { status })
            } else {
              this.toastService.show('Failed to delete all consents', 'Failed', { status })
            }
          }) // Placeholder for succesfully deleted
        }
      })
  }

  deleteAllData() {
    this.dialogService.open(ConfirmationModalComponent, { context: { text: 'Are you sure you wanna delete all data and consent?' , title: 'Delete all data'} })
      .onClose.subscribe((result: any) => {
        if (result) {
          const consentSucces: boolean = this.consentService.deleteAllConsent(this.id)
          const datasourceSuccess: boolean = this.datasourceService.deleteAllData(this.id); // Placeholder for succesfully deleted
          const status = consentSucces && datasourceSuccess ? "success" : "danger";

          if (consentSucces && datasourceSuccess) {
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
