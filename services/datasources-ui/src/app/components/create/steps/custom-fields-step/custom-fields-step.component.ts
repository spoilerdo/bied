import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { CustomFieldsDto } from "../../dtos/customFieldsDto";
import { FormControl, FormBuilder, FormGroup } from "@angular/forms";

interface CustomFieldValue {
  label: string;
  env: string;
}

@Component({
  selector: "app-custom-fields-step",
  templateUrl: "./custom-fields-step.component.html",
  styleUrls: ["./custom-fields-step.component.scss"],
})
export class CustomFieldsStepComponent implements OnInit {
  @Input() customFields: CustomFieldsDto;
  @Output() confirm: EventEmitter<CustomFieldsDto> = new EventEmitter();

  customFieldValues: CustomFieldValue[] = [
    {
      label: "Client ID",
      env: "CLIENT_ID",
    },
    {
      label: "Api token",
      env: "API_TOKEN",
    },
  ];
  customFieldsFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}
}
