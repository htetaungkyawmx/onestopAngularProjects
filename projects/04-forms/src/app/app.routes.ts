import { Routes } from '@angular/router';
import { TemplateComponent } from './template/template.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { TemplateStudentFormComponent } from './template/template-student-form/template-student-form.component';

export const routes: Routes = [
  {
    path: 'template', children: [
      { path: 'student-list', component: TemplateComponent, title: 'Template Student List' },
      { path: 'student-form', component: TemplateStudentFormComponent, title: 'Template Student Form' },
      { path: '', redirectTo: '/template/student-list', pathMatch: 'full' }
    ]
  },
  { path: 'reactive', component: ReactiveComponent, title: 'Reactive Form' },
  { path: 'dynamic', component: DynamicComponent, title: 'Dynamic Form' },
  { path: '', redirectTo: '/template', pathMatch: 'full' }
];
