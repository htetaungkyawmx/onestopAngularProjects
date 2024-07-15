import { Component, computed, effect, signal } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {

  message = ''
  effectRef: any
  counter = signal(0);
  multipler = 0;
  derivedCounter = computed(() => {
    if(this.counter() == 0) {
      return 0;
    } else {
      return this.counter() * this.multipler;
    }
  });

  interval: any
  data: string[] = []
  frameworks = ["Spring", "Angular", "React"]

  constructor() {
    this.effectRef = effect((onCleanUp) => {
              console.log(`Counter value ${this.counter()}`);

              onCleanUp(() => {
                console.log('Cleaning up effect.')
              })
            })
  }

  increment() {
    if(this.counter() == 10 && this.effectRef) {
      this.effectRef.destroy();
      this.message = "Already destroyed effect.";
      setTimeout(() => this.message = "", 2000);
    }
    this.counter.set(this.counter() + 1);
  }

  addData(name: string) {
    this.frameworks = [...this.frameworks]
    this.frameworks.push(name)
  }

  start() {
    this.interval = setInterval(() => this.data.push('Hello Interval'), 1000)
  }

  clear() {
    clearInterval(this.interval)
  }

}
