import { Component, Injectable } from '@angular/core';

@Component({
  selector: 'app-better-logger',
  standalone: true,
  imports: [],
  templateUrl: './better-logger.component.html',
  providers: [

  ],
  styles: ``
})

@Injectable()
export class BetterLoggerComponent {

  constructor(){
    console.log("Better Loggger Component")
  }



  log(message: string){
    console.log(`Log From Better Logger:${message}`)
  }

 
}
