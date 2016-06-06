import { Component } from '@angular/core';
import {MyNumber} from "./number";
import {InputSection} from "./app.inputSection";
@Component({
    selector: 'bincal-app',
    templateUrl: 'app/app.component.html',
    directives: [InputSection]
})
export class AppComponent
{
    inputNumber: MyNumber = new MyNumber(0);
}
