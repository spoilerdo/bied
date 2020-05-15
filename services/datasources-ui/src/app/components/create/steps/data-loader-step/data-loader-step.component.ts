import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  AfterViewInit,
} from "@angular/core";
import { DataloaderDto } from "../../dtos/dataloaderDto";
import {
  FormBuilder,
  FormGroup,
  Validators,
  ValidatorFn,
  ValidationErrors,
  NgForm,
} from "@angular/forms";
import { DataloaderType } from "src/app/models/dataloaderType";
import { BehaviorSubject } from "rxjs";

const GitUrlValidator: ValidatorFn = (
  formGroup: FormGroup
): ValidationErrors | null => {
  const type = formGroup.get("type");
  const gitUrl = formGroup.get("gitUrl");

  return type.value === DataloaderType.CUSTOM && !gitUrl.value
    ? { gitUrl: "Git URL is required with a custom dataloader" }
    : null;
};

@Component({
  selector: "app-data-loader-step",
  templateUrl: "./data-loader-step.component.html",
  styleUrls: ["./data-loader-step.component.scss"],
})
export class DataLoaderStepComponent implements OnInit, AfterViewInit {
  @ViewChild("dataloaderForm") dataloaderForm: NgForm;

  @Input() dataloader: DataloaderDto;
  @Output() next: EventEmitter<DataloaderDto> = new EventEmitter();

  dataloaderTypes: string[];
  dataloaderFormGroup: FormGroup;
  isFormValidSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.dataloaderTypes = Object.keys(DataloaderType);

    this.dataloaderFormGroup = this.formBuilder.group(
      {
        type: [this.dataloader.type, Validators.required],
        gitUrl: [this.dataloader.gitUrl],
      },
      { validators: [GitUrlValidator] }
    );
  }

  ngAfterViewInit(): void {
    this.dataloaderForm.statusChanges.subscribe((value) =>
      this.setIsFormValid(value === "VALID")
    );
  }

  convertDataloaderTypeToText(dataloaderType: DataloaderType) {
    switch (dataloaderType) {
      case DataloaderType.CUSTOM:
        return "Custom";
      case DataloaderType.FACEBOOK:
        return "Facebook";
      case DataloaderType.INSTAGRAM:
        return "Instagram";
      case DataloaderType.TWITTER:
        return "Twitter";
      default:
        throw Error("Dataloader type not found.");
    }
  }

  setIsFormValid(value: boolean) {
    this.isFormValidSubject.next(value);
  }

  isFormValid() {
    return this.isFormValidSubject.asObservable();
  }

  onNext() {
    this.next.emit(this.dataloaderFormGroup.getRawValue());
  }
}
