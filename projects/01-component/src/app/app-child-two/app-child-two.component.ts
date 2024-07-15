import { Component, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-child-two',
  standalone: true,
  imports: [],
  template: `
    <input #data type="text" class="form-control mb-3" placeholder="Enter data">
    <button class="btn btn-outline-success" (click)="send(data.value)">Send Data</button>
  `,
  outputs: ['onSend']
})
export class AppChildTwoComponent {

  onSend = new EventEmitter

  send(data: string) {
    this.onSend.emit(data)
  }
}
