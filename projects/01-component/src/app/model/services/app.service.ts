import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class AppService {

  constructor() { }

  get(): Observable<string[]> {
    return of([
      "Java",
      "Spring",
      "Angular",
      "React"
    ])
  }
}
