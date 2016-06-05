/**
 * Created by brycedcarter on 6/4/16.
 */

import { Component, Input } from '@angular/core';
import {MyNumber} from "./number";

@Component({
    selector: 'bin-display',
    templateUrl: 'app/app.binDisplay.html'
})
export class BinDisplay {
    @Input()
    number: MyNumber;

    setClasses(elementType)
    {
        var classes = {};
        switch (elementType)
        {
            case 'button':
                classes['btn-danger'] = this.number.invalidValue;
                break;

        }
        return classes
    }
}
