import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { NbViewportRulerAdapter } from '@nebular/theme';

@Injectable({
  providedIn: 'root',
})
export class CreateQuestionnaireService {
  public questionnaireForm: FormGroup;
  public actionBarOffsetBase: number;
  private ActionBarOffset: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(private readonly viewportRulerAdapter: NbViewportRulerAdapter) {}

  get $actionBarOffset(): Observable<number> {
    return this.ActionBarOffset.asObservable();
  }

  set actionBarOffset(offset: number) {
    const scrollPosition = this.viewportRulerAdapter.getViewportScrollPosition().top;
    const actionBarOffset = offset < this.actionBarOffsetBase ? 1 : offset - this.actionBarOffsetBase + scrollPosition;
    this.ActionBarOffset.next(actionBarOffset);
  }
}
