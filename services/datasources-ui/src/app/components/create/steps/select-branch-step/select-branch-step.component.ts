import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { BranchDto } from "../../dtos/branchDto";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { GitService } from "src/app/services/git.service";

@Component({
  selector: "app-select-branch-step",
  templateUrl: "./select-branch-step.component.html",
  styleUrls: ["./select-branch-step.component.scss"],
})
export class SelectBranchStepComponent implements OnInit {
  private dataloaderIdValue?: number;

  get dataloaderId(): number | undefined {
    return this.dataloaderIdValue;
  }

  @Input()
  set dataloaderId(value: number | undefined) {
    this.dataloaderIdValue = value;

    if (value) {
      this.gitService.getBranches(value).subscribe((res) => {
        this.branches = (res as any).data as string[];
      });
    }
  }

  @Input() branch: BranchDto;
  @Output() next: EventEmitter<BranchDto> = new EventEmitter();

  branches: string[];
  selectBranchFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private gitService: GitService
  ) {}

  ngOnInit(): void {
    this.selectBranchFormGroup = this.formBuilder.group({
      branchName: [this.branch.branchName, Validators.required],
    });
  }

  onNext() {
    this.next.emit(this.selectBranchFormGroup.getRawValue());
  }
}
