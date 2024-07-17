import { Component } from '@angular/core';
import { SUBJECTS } from '../../model/shared/shared-data';

@Component({
  selector: 'app-template-student-form',
  standalone: true,
  imports: [],
  templateUrl: './template-student-form.component.html',
  styles: ``
})
export class TemplateStudentFormComponent {

  subjects = SUBJECTS
}
