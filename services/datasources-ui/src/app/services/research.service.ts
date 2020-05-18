import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ResearchService {
  constructor(private http: HttpClient) {}

  getResearches() {
    return this.http.get(`${environment.apiUrl}/researches`);
  }
}
