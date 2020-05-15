import { Component } from "@angular/core";
import { NbMenuItem } from "@nebular/theme";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  menuItems: NbMenuItem[] = [
    {
      title: "Datasources",
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
  ];
}
