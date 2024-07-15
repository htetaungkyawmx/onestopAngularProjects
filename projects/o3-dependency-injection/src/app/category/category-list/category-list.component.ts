import { JsonPipe } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { single } from 'rxjs';
import { CategoryService } from '../../model/services/category.service';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './category-list.component.html',
  styles: ``
})
export class CategoryListComponent {

  list = input.required<Category[]>()
  listFromService = signal<Category[]>([])

  constructor(private categoryService: CategoryService){}

  ngOnInit(){
    this.categoryService.getAll().subscribe(resp => this.categoryService = resp)
  }
}
