import { DetailsDto } from "./detailsDto";
import { DataloaderDto } from "./dataloaderDto";
import { CustomFieldsDto } from "./customFieldsDto";
import { BranchDto } from "./branchDto";

export interface CreateDataloaderDto {
  dataloaderId?: number;
  privateRepository: boolean;
  detailsDto: DetailsDto;
  dataloaderDto: DataloaderDto;
  customFieldsDto: CustomFieldsDto;
  branchDto: BranchDto;
}

export const emptyCreateDataloaderDto: CreateDataloaderDto = {
  dataloaderId: undefined,
  privateRepository: false,
  detailsDto: {
    name: "",
    researchId: null,
  },
  dataloaderDto: {
    type: null,
  },
  customFieldsDto: {},
  branchDto: {
    branchName: "",
  },
};
