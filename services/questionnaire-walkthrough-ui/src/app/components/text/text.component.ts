import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
})
export class TextComponent implements OnInit {
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
