import { Injectable } from "@angular/core";
import { Category } from "../shared/model";
import { Observable, of } from "rxjs";

@Injectable()
export class CategoryService{

    private _database: Category[] = [
        {
            id: 1,
            name: "Backend"
        },
        {
            id: 2,
            name: "FrondEnd"
        },
        {
            id: 3,
            name: "Database"
        },
        {
            id: 4,
            name: "Software Engineering"
        }
    ]

    constructor(){
        console.log("category service")
    }


    getAll(): Observable<Category[]>{
        return of([...this._database])
    }

}