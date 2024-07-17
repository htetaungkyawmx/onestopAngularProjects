import { Component } from '@angular/core';
import { StudentTableComponent } from "../model/widgets/student-table/student-table.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-template',
    standalone: true,
    templateUrl: './template.component.html',
    styles: ``,
    imports: [StudentTableComponent, RouterLink]
})
export class TemplateComponent {

}
