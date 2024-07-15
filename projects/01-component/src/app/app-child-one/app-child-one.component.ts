import { Component, model } from "@angular/core";

@Component({
  selector: 'app-child-one',
  standalone: true,
  imports: [],
  template: `
    <div>
      <button class="btn btn-primary me-3" (click)="decreaseSize()" [style.width.px]="btnWidth">-</button>
      <button class="btn btn-outline-primary" (click)="increaseSize()" [style.width.px]="btnWidth">+</button>
    </div>
    <span [style.font-size.px]="size()">Font size: {{ size() }}px</span>
  `
})
export class AppChildOneComponent {

  size = model<number>()
  btnWidth = 50

  increaseSize() {
    this.resize(1)
  }

  decreaseSize() {
    this.resize(-1)
  }

  resize(delta: number) {
    this.size.set(Math.min(40, Math.max(8, +this.size + delta)))
  }
}
