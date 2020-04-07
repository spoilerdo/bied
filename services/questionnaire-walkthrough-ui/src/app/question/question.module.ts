import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BiedQuestionComponent } from '../components/bied-question/bied-question.component';
import { MultipleChoiceComponent } from '../components/multiple-choice/multiple-choice.component';
import { LikertComponent } from '../components/likert/likert.component';
import { TextComponent } from '../components/text/text.component';
import { NumericComponent } from '../components/numeric/numeric.component';
import { DateComponent } from '../components/date/date.component';
import { TimeComponent } from '../components/time/time.component';
import { DropdownComponent } from '../components/dropdown/dropdown.component';
import { RadioComponent } from '../components/radio/radio.component';
import { LikertGroupComponent } from '../components/likert-group/likert-group.component';
import {
  NbIconModule,
  NbTooltipModule,
  NbCheckboxModule,
  NbRadioModule,
  NbListModule,
  NbSelectModule,
  NbListItemComponent,
  NbInputModule,
  NbDatepickerModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

const nebular = [
  NbIconModule,
  NbTooltipModule,
  NbCheckboxModule,
  NbRadioModule,
  NbDatepickerModule,
  NbListModule,
  NbSelectModule,
  NbEvaIconsModule,
  NbInputModule,
];

export const questionComponents = [
  BiedQuestionComponent,
  MultipleChoiceComponent,
  LikertComponent,
  TextComponent,
  NumericComponent,
  DateComponent,
  TimeComponent,
  DropdownComponent,
  RadioComponent,
  LikertGroupComponent,
];

@NgModule({
  declarations: [questionComponents],
  imports: [CommonModule, nebular],
  entryComponents: [
    NbListItemComponent,
    MultipleChoiceComponent,
    LikertComponent,
    TextComponent,
    NumericComponent,
    DateComponent,
    TimeComponent,
    DropdownComponent,
    RadioComponent,
    LikertGroupComponent,
  ],
})
export class QuestionModule {}

//TODO QuestionModule als forRoot kunnen gebruiken zodat je in die call nieuwe question components kan toevoegen
