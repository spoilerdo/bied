import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-likert-group',
  templateUrl: './likert-group.component.html',
  styleUrls: ['./likert-group.component.scss'],
})
export class LikertGroupComponent implements OnInit {
  @Input() public question: any;
  @Input() public answer: any;
  @Input() public information: string;

  constructor() {}

  ngOnInit(): void {}

  setAnswer(event) {
    this.answer = event;
    // this.submitAnswer();
  }
}
