import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BiedQuestionComponent } from 'src/app/components/bied-question/bied-question.component';
import { MultipleChoiceComponent } from 'src/app/components/multiple-choice/multiple-choice.component';
import { LikertComponent } from 'src/app/components/likert/likert.component';
import { TextComponent } from 'src/app/components/text/text.component';
import { NumericComponent } from 'src/app/components/numeric/numeric.component';
import { DateComponent } from 'src/app/components/date/date.component';
import { TimeComponent } from 'src/app/components/time/time.component';
import { DropdownComponent } from 'src/app/components/dropdown/dropdown.component';
import { RadioComponent } from 'src/app/components/radio/radio.component';
import {
  NbIconModule,
  NbTooltipModule,
  NbCheckboxModule,
  NbRadioModule,
  NbListModule,
  NbSelectModule,
  NbListItemComponent,
  NbInputModule,
  NbDatepickerModule,
} from '@nebular/theme';
//import { NbMomentDateModule } from '@nebular/moment';
import { NbEvaIconsModule } from '@nebular/eva-icons';

const nebular = [
  NbIconModule,
  NbTooltipModule,
  NbCheckboxModule,
  NbRadioModule,
  NbDatepickerModule,
  //NbMomentDateModule,
  NbListModule,
  NbSelectModule,
  NbEvaIconsModule,
  NbInputModule,
];

const angular = [FormsModule, ReactiveFormsModule];

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
];

@NgModule({
  declarations: [questionComponents],
  imports: [CommonModule, nebular, angular],
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
  ],
})
export class QuestionModule {}
