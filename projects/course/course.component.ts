import { Component, Inject, InjectionToken, inject } from '@angular/core';
import { CategoryService } from '../model/services/category.service';
import { CourseService } from '../model/services/course.service';
import { BetterLoggerComponent } from '../model/service/better-logger/better-logger.component';
import { LoggerService } from '../model/services/logger.service';
import { DOCUMENT } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';



const courseServiceFactory = (loggerService: LoggerService ) => new CourseService(loggerService)

const MY_TOKEN = new InjectionToken<string>("MyToken", {factory: () => "Hello Token"})



@Component({
  selector: 'app-course',
  standalone: true,
  imports: [CourseListComponent],
  templateUrl: './course.component.html',
  providers: [
    LoggerService,
    {provide: CourseService, useFactory: courseServiceFactory, deps: [LoggerService]},
    {provide: "value", useValue: "Value Provider", multi: true},
    {provide: "value", useValue: "Other Value Provider", multi: true},
    {provide: "value", useValue: "Another Value Provider", multi: true},
    // {provide: MY_TOKEN, useValue: "Token Value"}
  ],
  styles: ``
})
export class CourseComponent {

 

  

  constructor(private courseService: CourseService,
    @Inject(DOCUMENT) private document: Document,
    @Inject("value") private val :string,
    @Inject(MY_TOKEN) tokenValue:string[]){
    console.log("Course Componemnt");
    console.log(courseService);
    console.log(val);
  
  }

  html = "I am 1<sup class='fw-bold'> st</sup> sudent"

  ngAfterViewInit(){
    const html = this.document.getElementsByClassName("fw-bold")
    console.log(html[0].textContent)
  }

 

}

