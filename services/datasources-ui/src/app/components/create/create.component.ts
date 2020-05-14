import { Component, OnInit } from "@angular/core";
import {
  CreateDataloaderDto,
  emptyCreateDataloaderDto,
} from "./dtos/createDataloaderDto";
import { DetailsDto } from "./dtos/detailsDto";
import { DataloaderDto } from "./dtos/dataloaderDto";
import { CustomFieldsDto } from "./dtos/customFieldsDto";
import { BranchDto } from "./dtos/branchDto";
import { DataLoaderService } from "src/app/services/dataloader.service";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.scss"],
})
export class CreateComponent implements OnInit {
  createDataloaderDto: CreateDataloaderDto;

  constructor(private dataloaderService: DataLoaderService) {}

  ngOnInit(): void {
    this.createDataloaderDto = emptyCreateDataloaderDto;
  }

  onNextDetails(details: DetailsDto) {
    this.createDataloaderDto.detailsDto = details;
  }

  onNextDataloader(dataLoader: DataloaderDto) {
    this.createDataloaderDto.dataloaderDto = dataLoader;

    this.dataloaderService
      .saveDataloaderStep(this.createDataloaderDto)
      .subscribe((res) => {
        this.createDataloaderDto.dataloaderId = (res as any).id;
      });
  }

  onNextKeygen(keygen: any) {}

  onNextSelectBranch(branch: BranchDto) {
    this.createDataloaderDto.branchDto = branch;
  }

  onConfirmCustomFields(customFields: CustomFieldsDto) {
    this.createDataloaderDto.customFieldsDto = customFields;

    this.dataloaderService
      .confirmDataloaderStep(this.createDataloaderDto)
      .subscribe();
  }
}
