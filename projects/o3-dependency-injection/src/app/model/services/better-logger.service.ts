import { Injectable } from "@angular/core";


@Injectable()
export class BetterLoggerService{

    log(message: string){
        console.log(`Log From Better Logger: ${message}`)
    }

    constructor(){
        this.loggerService.log('Course component')
    }
}