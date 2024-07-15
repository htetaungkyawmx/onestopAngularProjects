import { Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ServicesComponent } from './services/services.component';

export const routes: Routes = [
  {
    path: 'bind',
    component: ParentComponent,
    title: 'Binding'
  },
  {
    path: 'service',
    component: ServicesComponent,
    title: 'Services'
  },
  {
    path: '',
    redirectTo: '/bind',
    pathMatch: 'full'
  }
];
