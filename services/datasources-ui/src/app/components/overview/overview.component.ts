import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NbMenuService } from "@nebular/theme";
import { BehaviorSubject } from "rxjs";
import { filter, map } from "rxjs/operators";

import { Dataloader } from "../../../app/models/dataloader";
import { DataloaderType } from "../../../app/models/dataloaderType";
import { DataLoaderService } from "../../../app/services/dataloader.service";

@Component({
  selector: "app-overview",
  templateUrl: "./overview.component.html",
  styleUrls: ["./overview.component.scss"],
})
export class OverviewComponent implements OnInit {
  public dataloaders: BehaviorSubject<Dataloader[]> = new BehaviorSubject([]);

  constructor(
    private dataloaderService: DataLoaderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.dataloaderService.findAll().subscribe((response: any) => {
      if (response.data) {
        this.dataloaders.next(
          response.data.map((item) => Dataloader.fromJson(item))
        );
      }
    });
  }

  navigateToCreate() {
    this.router.navigateByUrl("datasources/create");
  }
}
