/**
 * Created by brycedcarter on 6/4/16.
 */
import { Component, Input } from '@angular/core';
import {MyNumber} from "./number";

@Component({
    selector: 'bin-dec-hex-input',
    templateUrl: 'app/app.binDecHexInput.html'
})
export class BinDecHexInput {
    @Input()
    inputNumber: MyNumber;
    currentMode: string = 'decimal';
    private _currentValue: string;

    set value(value)
    {
        value = value ? value : '';
        var tmpValue = '0';
        if (this.currentMode == 'binary')
        {
             tmpValue = '0B'.concat(value.replace(/^(0{0,1}[b,B]){0,1}0*/, ""));
        }
        else if (this.currentMode == 'decimal')
        {
            tmpValue  = value.replace(/^0*/, '');
        }
        else if (this.currentMode == 'hexadecimal')
        {
            tmpValue = '0X'.concat(value.replace(/^(0{0,1}[x,X]){0,1}0*/, ""));
        }
        console.log(tmpValue);
        console.log('here');
        this.inputNumber.value = (/^(((0B|0X)0*)|(0+))$/.test(tmpValue) || (tmpValue=='')) ? 0 : tmpValue;
        this._currentValue = value;
    }

    setClasses(elementType)
    {
        var classes = {};
        switch (elementType)
        {
            case 'button-binary':
                classes['btn-primary'] = this.currentMode == 'binary';
                classes['btn-default'] = this.currentMode != 'binary';
                break;
            case 'button-decimal':
                classes['btn-primary'] = this.currentMode == 'decimal';
                classes['btn-default'] = this.currentMode != 'decimal';
                break;
            case 'button-hexadecimal':
                classes['btn-primary'] = this.currentMode == 'hexadecimal';
                classes['btn-default'] = this.currentMode != 'hexadecimal';
                break;

        }
        return classes
    }
}
