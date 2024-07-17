import { Component, input } from '@angular/core';
import { Student } from '../../shared/model';

@Component({
  selector: 'app-student-table',
  standalone: true,
  imports: [],
  templateUrl: './student-table.component.html',
  styles: ``
})
export class StudentTableComponent {

  students = input.required<Student[]>()
}
