import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class DatasourceService {
  constructor(private http: HttpClient) {}

  create(datasource: any) {
    return this.http.post(`${environment.apiUrl}/datasources`, datasource);
  }
}
