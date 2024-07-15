import { Component, EventEmitter, input, output } from "@angular/core";

@Component({
  selector: 'child',
  standalone: true,
  imports: [],
  template: `
    <input #textVal type="text" [value]="result()" class="form-control mb-3">
    <button class="btn btn-outline-warning me-3" (click)="check(textVal.value)">Change</button>
  `
})
export class ChildComponent {

  result = input(null, {
    alias: 'dataArray',
    transform: (d: string[]) => d.join(" - ")
  })

  onChange = output<string>()

  check(val: string) {
    if(val !== this.result()) {
      this.onChange.emit('Value changed!')
    } else {
      this.onChange.emit('Value not changed!')
    }
  }

}
