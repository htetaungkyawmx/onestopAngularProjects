import { Component, input, signal } from '@angular/core';
import { Category } from '../../model/shared/model';
import { JsonPipe } from '@angular/common';
import { CategoryService } from '../../model/services/category.service';
import { single } from 'rxjs';

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

  constructor(private categoryServie: CategoryService){

  }

  ngOnInit(){
    this.categoryServie.getAll().subscribe(resp => this.listFromService.set(resp))
  }

}
