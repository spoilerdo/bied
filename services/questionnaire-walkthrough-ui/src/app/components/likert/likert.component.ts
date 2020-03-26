import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-likert',
  templateUrl: './likert.component.html',
  styleUrls: ['./likert.component.scss'],
})
export class LikertComponent implements OnInit {
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
