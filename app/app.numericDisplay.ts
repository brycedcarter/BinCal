/**
 * Created by brycedcarter on 6/4/16.
 */

import {Component, Input} from '@angular/core';
import {MyNumber} from "./number";
import {ClipboardDirective} from './clipboardDirective'

@Component({
    selector: 'numeric-display',
    inputs: ['number', 'displayMode'],
    templateUrl: 'app/app.numericDisplay.html',
    directives: [ClipboardDirective]
})
export class NumericDisplay
{
    number: MyNumber;
    displayMode: string;

    constructor() {}

    setClasses(elementType)
    {
        var classes = {};
        switch (elementType)
        {
            case 'button':
                classes['btn-danger'] = this.number.invalidValue;
                break;
            case 'input-div':
                classes['has-error'] = this.number.invalidValue;
                break;
            case 'text':
                classes['text-error'] = this.number.invalidValue;
                break;
        }
        return classes
    }

    getValue()
    {
        switch (this.displayMode)
        {
            case 'decimal':
                return this.number.decString;
            case 'hexadecimal':
                return this.number.hexString;
            case 'twos':
                return this.number.twosString;
        }
    }
}
