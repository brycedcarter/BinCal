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
        switch (this.currentMode)
        {
            case 'binary':
                tmpValue = '0B'.concat(value.replace(/^(0{0,1}[b,B]){0,1}0*/, ""));
                break;
            case 'decimal':
                tmpValue  = value.replace(/^0*/, '');
                break;
            case 'hexadecimal':
                tmpValue = '0X'.concat(value.replace(/^(0{0,1}[x,X]){0,1}0*/, ""));
                break;
            case 'twos':
                tmpValue = '0T'.concat(value.replace(/^(0{0,1}[t,T]){0,1}0*/, ""));
                break;
        }
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
            case 'button-twos':
                classes['btn-primary'] = this.currentMode == 'twos';
                classes['btn-default'] = this.currentMode != 'twos';
                break;

        }
        return classes
    }
}
