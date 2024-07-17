import { Injectable } from '@angular/core';
import {Course}  from '../shared/model';
import { Observable, of } from 'rxjs';
import { LoggerService } from './logger.service';

@Injectable()
export class CourseService {

  private _database: Course[] = [
    {
      name: "java Basic",
      fees: 40000,
      duration: 3,
      startDate: new Date(2024, 9, 1),
      outlines: [
        "Language Fundamental",
        "OOP",
        "OO design Principle",
        "OO Design Patterns",
        "Essential API"
      ]
    },
    {
      name: "Spring Framework",
      fees: 45000,
      duration: 4,
      startDate: new Date(2024, 7 , 14),
      outlines: [
        "Inversion of Controls",
        "Spring Beans",
        "Dependency Beans",
        "Aspect Oriented Programming",
        "Spring Data",
        "Spring MVC",
        "Spring REST"
      ]
    },
    {
      name: "Angular Framework",
      fees: 40000,
      duration: 3,
      startDate: new Date(2024, 9, 1),
      outlines: [
        "HTML",
        "CSS",
        "ECMA Script 6",
        "Type Script",
        "Component",
        "Data Binding",
        "Directive",
        "Signals",
        "Routind",
        "Depency Injection",
        "Forms",
        "Http Client",
        "Internationalization",
        "Angular Materials",
        "Module Vs Standalone"
      ]
    }
  

  ]

  constructor(private loggerService: LoggerService) {
    console.log('Course Service');
  }

    getAll(): Observable<Course[]>{
      return of([...this._database])
    }
  
}
