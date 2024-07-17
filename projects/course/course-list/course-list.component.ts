import { Component, SkipSelf } from '@angular/core';
import { CourseService } from '../../model/services/course.service';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [],
  templateUrl: './course-list.component.html',
  styles: ``
})
export class CourseListComponent {


  constructor( courseService: CourseService){
    console.log("Course List Component")
  }

}
