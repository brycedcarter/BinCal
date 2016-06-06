/**
 * Created by brycedcarter on 6/4/16.
 */

import { Component, Input } from '@angular/core';
import {MyNumber} from "./number";
import {ClipboardDirective} from './clipboardDirective'

@Component({
    selector: 'bin-display',
    templateUrl: 'app/app.binDisplay.html',
    directives: [ClipboardDirective]
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
                classes['btn-primary'] = !this.number.invalidValue;
                break;
        }
        return classes
    }
}
