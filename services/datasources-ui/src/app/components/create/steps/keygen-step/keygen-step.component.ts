import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { GitService } from "src/app/services/git.service";

@Component({
  selector: "app-keygen-step",
  templateUrl: "./keygen-step.component.html",
  styleUrls: ["./keygen-step.component.scss"],
})
export class KeygenStepComponent implements OnInit {
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

  @Output() next: EventEmitter<null> = new EventEmitter();

  key: string;
  keygenFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private gitService: GitService
  ) {}

  ngOnInit(): void {
    this.keygenFormGroup = this.formBuilder.group({
      confirmAddedDeployKey: [this.key, Validators.requiredTrue],
    });
  }

  onNext() {
    this.next.emit(null);
  }
}
