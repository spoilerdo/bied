import { DetailsDto } from "./detailsDto";
import { DataloaderDto } from "./dataloaderDto";
import { CustomFieldsDto } from "./customFieldsDto";

export interface CreateDataloaderDto {
  detailsDto: DetailsDto;
  dataloaderDto: DataloaderDto;
  customFieldsDto: CustomFieldsDto;
}

export const emptyCreateDataloaderDto: CreateDataloaderDto = {
  detailsDto: {
    name: "",
    researchId: null,
  },
  dataloaderDto: {
    type: null,
  },
  customFieldsDto: {},
};
