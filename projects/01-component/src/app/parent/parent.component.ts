import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppChildOneComponent } from '../app-child-one/app-child-one.component';
import { AppChildTwoComponent } from '../app-child-two/app-child-two.component';

@Component({
  selector: 'parent',
  standalone: true,
  imports: [NgClass, FormsModule, AppChildOneComponent, AppChildTwoComponent],
  templateUrl: './parent.component.html',
  styles: [
    `
      .colorRed {
        color: red;
      }
    `
  ],
})
export class ParentComponent {
  title = 'Data Binding'
  value = 100
  imageUrl = '/images/duke1.png'

  classObj = {
    colorRed: false
  }

  toggleValue = true
  imgWidth = 20
  bgColor = "teal"

  inputValue = 'My value'

  classes = ['border-5', 'border-start', 'border-success', 'ps-2'];

  fontSizePx = 14
  dataFromChild = ''

  showDom(img: any) {
    console.log(img)
  }

  toggleColor(event?: any) {
    console.log(event)
    this.toggleValue ? this.toggleValue = false : this.toggleValue = true
  }
}
