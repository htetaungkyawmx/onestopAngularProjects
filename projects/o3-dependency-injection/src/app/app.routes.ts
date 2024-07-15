import { Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { CourseComponent } from './course/course.component';

export const routes: Routes = [
    {
        path:'category',
        component: CategoryComponent,
        title: 'Category Management'
    },
    {
        path: 'course',
        component: CourseComponent,
        title: 'Category Management'
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/category'
    }
];
