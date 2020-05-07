import { Component, OnInit, Input } from '@angular/core';
import { Datasource } from 'src/app/models/datasource';

@Component({
  selector: 'app-datasource-list-item',
  templateUrl: './datasource-list-item.component.html',
  styleUrls: ['./datasource-list-item.component.scss']
})
export class DatasourceListItemComponent implements OnInit {
  @Input() datasource: Datasource;

  constructor() { }

  ngOnInit(): void {
  }

}
