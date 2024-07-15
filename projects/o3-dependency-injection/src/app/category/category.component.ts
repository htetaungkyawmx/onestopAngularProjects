import { Component, signal } from '@angular/core';
import { CategoryService } from '../model/services/category.service';
import { CategoryListComponent } from "./category-list/category-list.component";

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CategoryListComponent],
  templateUrl: './category.component.html',
  providers: [],
  styles: ``
})

export class CategoryComponent {

  categories = signal<Category[]>([])

  constructor(private categoryService: CategoryService) {}

  ngOnInit(){
    this.categoryService.getAll().subscribe(resp => this.categories.set(resp))
  }
}
