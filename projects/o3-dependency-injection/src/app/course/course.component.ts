import { Component, inject } from '@angular/core';
import { CourseService } from '../model/services/course.service';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [],
  templateUrl: './course.component.html',
  styles: ``
})
export class CourseComponent {

  private courseService = inject(CourseService)
}
