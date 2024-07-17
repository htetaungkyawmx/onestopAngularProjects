import { Component, Injectable } from '@angular/core';

@Component({
  selector: 'app-logger',
  standalone: true,
  imports: [],
  templateUrl: './logger.component.html',
  styles: ``
})

@Injectable()
export class LoggerComponent {

  log(message: unknown): void{
    console.log(message);
  }

  warn(message: unknown): void{
    console.warn(message);
  }

  error(message: unknown): void{
    console.error(message);
  }

}
