import { Component, OnInit } from "@angular/core";
import {
  CreateDataloaderDto,
  emptyCreateDataloaderDto,
} from "./dtos/createDataloaderDto";
import { DetailsDto } from "./dtos/detailsDto";
import { DataloaderDto } from "./dtos/dataloaderDto";
import { CustomFieldsDto } from "./dtos/customFieldsDto";
import { DatasourceService } from "src/app/services/datasource.service";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.scss"],
})
export class CreateComponent implements OnInit {
  createDataloaderDto: CreateDataloaderDto;

  constructor(private datasourceService: DatasourceService) {}

  ngOnInit(): void {
    this.createDataloaderDto = emptyCreateDataloaderDto;
  }

  onNextDetails(details: DetailsDto) {
    this.createDataloaderDto.detailsDto = details;
  }

  onNextDataloader(dataLoader: DataloaderDto) {
    this.createDataloaderDto.dataloaderDto = dataLoader;
  }

  onConfirmCustomFields(customFields: CustomFieldsDto) {
    this.createDataloaderDto.customFieldsDto = customFields;

    this.datasourceService.create(this.createDataloaderDto).subscribe();
  }
}
