import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-numeric',
  templateUrl: './numeric.component.html',
  styleUrls: ['./numeric.component.scss'],
})
export class NumericComponent implements OnInit {
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
