import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class GitService {
  constructor(private http: HttpClient) {}

  getBranches(dataloaderId: number) {
    return this.http.get(
      `${environment.apiUrl}/dataloaders/${dataloaderId}/branches`
    );
  }

  getGeneratedSSHKey(dataloaderId: number) {
    return this.http.get(
      `${environment.apiUrl}/dataloaders/${dataloaderId}/keygen`
    );
  }
}
