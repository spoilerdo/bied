import { Component, OnInit } from '@angular/core';
import { NbMenuService } from '@nebular/theme';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  actionItems = [
    { title: 'Delete' },
  ];

  constructor(private nbMenuService: NbMenuService) { }

  ngOnInit(): void {
    this.nbMenuService.onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'action-context-menu'),
        map(({ item: { title } }) => title),
      )
      .subscribe(title => console.log(`${title} was clicked!`));
  }

}
