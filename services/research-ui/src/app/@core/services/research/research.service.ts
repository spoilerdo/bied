import { environment } from './../../../../environments/environment';
import { CreateResearch } from './models/createResearch';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Research } from '../../models/research';
import { SortingTypes } from '../../models/sortingTypes';
import { Observable, BehaviorSubject } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { SortArrObj, Arrangement } from 'src/app/Utility';

@Injectable({
  providedIn: 'root'
})
export class ResearchProvider {
  private researchesSubject = new BehaviorSubject<Research[]>(null);

  constructor(private httpClient: HttpClient) {}

  getResearches(): Observable<Research[]> {
    this.httpClient.get(`${environment.apiUrl}/api/research`)
      .pipe(pluck('researches'))
      .subscribe((researches: any) => {
        this.researchesSubject.next(researches);
      });

    return this.researchesSubject.asObservable();
  }
  getResearch(id: string): Observable<Research> {
    this.httpClient.get(`${environment.apiUrl}/api/research/${id}`)
      .pipe(pluck('research'))
      .subscribe((research: Research) => {
        this.updateSubject(research);
      });

    return new Observable(o => {
        o.next(this.researchesSubject.value.find(r => r.id === id));
    });
  }
  createResearch(reqModel: CreateResearch): void {
    this.httpClient.post(`${environment.apiUrl}/api/research`, reqModel)
      .pipe(pluck('research'))
      .subscribe((research: Research) => {
        this.researchesSubject.next([...this.researchesSubject.value, research]);
      });
  }
  editResearch(reqModel: CreateResearch, id: string): void {
    this.httpClient.put(`${environment.apiUrl}/api/research/${id}`, reqModel)
      .pipe(pluck('research'))
      .subscribe((research: Research) => {
        this.updateSubject(research);
      });
  }
  deleteResearch(id: string): void {
    this.httpClient.delete(`${environment.apiUrl}/api/research/${id}`)
      .subscribe(() => {
        const array = this.researchesSubject.value.filter(r => r.id !== id);
        this.researchesSubject.next(array);
      });
  }
  addDatasourceToResearch(): Research {
    throw new Error('Method not implemented.');
  }
  removeDatasourceFromResearch(): Research {
    throw new Error('Method not implemented.');
  }
  inviteUsersToResearch(): void {
    throw new Error('Method not implemented.');
  }
  searchResearch(searchTerm: string): Research[] {
    const regexp = new RegExp(searchTerm, 'i');
    if (searchTerm.length > 0) {
      return this.researchesSubject.value.filter(r => regexp.test(r.name));
    }
    return this.researchesSubject.value;
  }
  orderResearch(order: SortingTypes, data: Research[]): Research[] {
    switch (order) {
      // START SORTING ON END DATE
      case SortingTypes.DATEA:
        return SortArrObj(data, 'endDate', Arrangement.ASCENDING);
      case SortingTypes.DATEZ:
        return SortArrObj(data, 'endDate', Arrangement.DESCENDING);

      // START SORTING ON ALPHABETICAL ORDER
      case SortingTypes.ALFAA:
        return SortArrObj(data, 'name', Arrangement.ASCENDING);
      case SortingTypes.ALFAZ:
        return SortArrObj(data, 'name', Arrangement.DESCENDING);

      default:
        return SortArrObj(data, 'name', Arrangement.ASCENDING);
    }
  }

  private updateSubject(research: Research): void {
    const i = this.researchesSubject.value.findIndex(r => r.id === research.id);
    if( i >= 0 ) {
      const array = this.researchesSubject.getValue();
      array[i] = research;
      this.researchesSubject.next(array)
    } else {
      this.researchesSubject.next([...this.researchesSubject.value, research])
    }
  }
}
