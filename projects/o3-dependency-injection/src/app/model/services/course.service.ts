import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Course} from '../model/services/course.service.ts';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private _database: Course[] = [
    {
    name: "Java Basic",
    fees: 300000,
    duration: 3,
    startDate: new Date(2024, 9,1),
    outlines:[
      "language Fundamental",
      "OOP",
      "OO Design Principle",
      "OO Design Patterns",
      "Essential APIs"
    ] 
  },
  {
    name: "Spring Framework",
    fees: 4500000,
    duration: 4,
    startDate: new Date(2024, 7,14),
    outlines:[
      "Inversion of Controls",
      "Spring Beans",
      "Dependency Injection",
      "Aspect Oriented Programming",
      "Spring Data",
      "Spring MVC",
      "Spring REST"
    ]
  },
  {
    name: "Angular Framework",
    fees: 400000,
    duration: 3,
    startDate: new Date(2024, 9,1),
    outlines:[
      "HTML", "CSS", "ECMA Script 6", "Typescript","Component", "Data Binding",
      "Directive", "Signals", "Routing", "Dependency Injection",
      "Forms", "Http Client", "Internationalization", "Angular Materials",
      "Module VS Standalone"
    ]
  }
  ]

  constructor() { }

  getAll(): Observable<Course[]> {
    return of([... this._database])
  }
}
