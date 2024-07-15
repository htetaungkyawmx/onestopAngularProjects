import { Injectable } from "@angular/core";
import {Category} from "../shared/model";
import { Observable, of } from "rxjs";

@Injectable()
export class CategoryService{

    private _database: Category[] = [
        {
            id: 1,
            name: "JAVA"
        },
        {
            id: 2,
            name: "Backend"
        },
        {
            id: 3,
            name: "Fronend"
        },
        {
            id: 4,
            name: "Database"
        },
        {
            id: 5,
            name: "Software Engeineering"
        },
    ]

    getAll(): Observable<Category[]> {
        return of([... this._database])
    }
}