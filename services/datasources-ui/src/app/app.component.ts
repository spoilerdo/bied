import { Component, OnInit } from "@angular/core";
import { NbMenuItem, NbMenuService, NbMenuBag } from "@nebular/theme";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  private authenticated = false;

  constructor(
    private readonly menuService: NbMenuService,
    private readonly router: Router
  ) {}

  public sidebarItems: NbMenuItem[] = [
    { title: "Consents", icon: "checkmark-square-2-outline" },
    {
      title: "Datasources",
      icon: "layers-outline",
      expanded: true,
      children: [
        {
          title: "Overview",
          link: "/datasources/overview",
        },
        {
          title: "Create",
          link: "/datasources/create",
        },
      ],
    },
    { title: "Questionnaires", icon: "book-open-outline" },
    { title: "Researches", icon: "file-text-outline" },
  ];

  public profileItems: BehaviorSubject<NbMenuItem[]> = new BehaviorSubject([]);

  ngOnInit() {
    const tempProfileItems = [
      { title: "Profile" },
      { title: "Participated researches" },
      this.authenticated ? { title: "Logout" } : { title: "Login" },
    ];

    this.profileItems.next(tempProfileItems);

    this.menuService.onItemClick().subscribe((event) => {
      this.mapEventToAction(event);
    });
  }

  get profileItems$() {
    return this.profileItems.asObservable();
  }

  private mapEventToAction(event: NbMenuBag) {
    const { tag, item } = event;

    tag === "profile"
      ? this.mapEventToProfileAction(item)
      : this.mapEventToSideMenuAction(item);
  }

  private mapEventToProfileAction(item: NbMenuItem) {
    switch (item.title) {
      case "Profile":
        window.location.href = "/consent/profile";
        break;
      case "Participated researches":
        window.location.href = "/consent/researches";
        break;
      case "Logout":
        // await this.tokenService.logout();
        break;
      case "Login":
        window.location.href = "/authentication";
        break;
    }
  }

  private mapEventToSideMenuAction(item: NbMenuItem) {
    switch (item.title) {
      case "Researches":
        window.location.href = "/research";
        break;
      case "Consents":
        window.location.href = "/consent";
        break;
      case "Datasources":
        this.router.navigateByUrl("datasources");
        break;
      case "Questionnaires":
        window.location.href = "/questionnaire";
    }
  }
}
