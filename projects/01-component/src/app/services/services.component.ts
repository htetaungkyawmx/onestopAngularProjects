import { Component } from '@angular/core';
import { AppService } from '../model/services/app.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  providers: [AppService],
  template: `
    <ul class="list-group">
      @for (name of courseNames; track $index) {
        <li class="list-group-item list-group-item-action">{{ name }}</li>
      }
    </ul>
  `
})
export class ServicesComponent {

  courseNames: string[] = []
  private cnSubscription!: Subscription

  constructor(private service: AppService) {}

  ngOnInit() {
    this.cnSubscription = this.service.get().subscribe(result => this.courseNames = result)
  }

  ngOnDestroy() {
    if(this.cnSubscription) {
      this.cnSubscription.unsubscribe
      console.log('Already unsubscribe!')
    }
  }

}
