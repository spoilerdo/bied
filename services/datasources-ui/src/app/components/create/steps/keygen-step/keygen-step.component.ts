import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { GitService } from "src/app/services/git.service";

@Component({
  selector: "app-keygen-step",
  templateUrl: "./keygen-step.component.html",
  styleUrls: ["./keygen-step.component.scss"],
})
export class KeygenStepComponent implements OnInit {
  @ViewChild("stepperNext") stepperNext: ElementRef;

  private dataloaderIdValue?: number;

  get dataloaderId(): number | undefined {
    return this.dataloaderIdValue;
  }

  @Input()
  set dataloaderId(value: number | undefined) {
    this.dataloaderIdValue = value;

    if (value) {
      this.gitService.getGeneratedSSHKey(value).subscribe((res) => {
        this.key = (res as any).data;
      });
    }
  }

  private skipValue: boolean;

  get skip(): boolean {
    return this.skipValue;
  }

  @Input()
  set skip(value: boolean) {
    this.skipValue = value;

    if (value && !!this.stepperNext) {
      this.stepperNext.nativeElement.click();
    }
  }

  @Output() next: EventEmitter<null> = new EventEmitter();

  key: string;
  keygenFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private gitService: GitService
  ) {}

  ngOnInit(): void {
    this.keygenFormGroup = this.formBuilder.group({
      confirmAddedDeployKey: [false, Validators.requiredTrue],
    });
  }

  onCheckedChanged(checked: boolean) {
    this.keygenFormGroup.get("confirmAddedDeployKey").setValue(checked);
  }

  onNext() {
    this.next.emit(null);
  }
}
