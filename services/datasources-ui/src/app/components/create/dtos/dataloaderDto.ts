import { DataloaderType } from "src/app/models/dataloaderType";

export interface DataloaderDto {
  type: DataloaderType;
  gitUrl?: string;
}
