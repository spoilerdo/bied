import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

import { CreateDataloaderDto } from "../components/create/dtos/createDataloaderDto";

@Injectable({
  providedIn: "root",
})
export class DataLoaderService {
  constructor(private http: HttpClient) {}

  findAll() {
    return this.http.get(`${environment.apiUrl}/dataloaders`);
  }

  saveDataloaderStep(createDataLoaderDto: CreateDataloaderDto) {
    return this.http.post(
      `${environment.apiUrl}/dataloaders`,
      createDataLoaderDto
    );
  }

  confirmDataloaderStep(createDataLoaderDto: CreateDataloaderDto) {
    return this.http.put(
      `${environment.apiUrl}/dataloaders/${createDataLoaderDto.dataloaderId}`,
      createDataLoaderDto
    );
  }
}
