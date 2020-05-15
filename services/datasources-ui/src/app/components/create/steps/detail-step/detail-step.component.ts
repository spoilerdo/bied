import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ResearchService } from "src/app/services/research.service";
import { Research } from "src/app/models/research";
import { DetailsDto } from "../../dtos/detailsDto";

@Component({
  selector: "app-detail-step",
  templateUrl: "./detail-step.component.html",
  styleUrls: ["./detail-step.component.scss"],
})
export class DetailStepComponent implements OnInit {
  @Input() details: DetailsDto;
  @Output() next: EventEmitter<DetailsDto> = new EventEmitter();

  researches: Research[];
  detailsFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private researchService: ResearchService
  ) {}

  ngOnInit(): void {
    this.detailsFormGroup = this.formBuilder.group({
      name: [this.details.name, [Validators.required, Validators.minLength(6)]],
      researchId: [this.details.researchId, Validators.required],
    });

    this.researchService.getResearches().subscribe((apiResponse) => {
      this.researches = (apiResponse as any).data.map((research: any) =>
        Research.fromJson(research)
      );
    });
  }

  onNext() {
    this.next.emit(this.detailsFormGroup.getRawValue());
  }
}
