/**
 * Created by brycedcarter on 6/4/16.
 */
import { Component } from '@angular/core';
import { BinDecHexInput } from './app.binDecHexInput'
import { BinDisplay } from './app.binDisplay'
import { MyNumber } from './number'
import {NumericDisplay} from "./app.numericDisplay";


@Component({
    selector: 'input-section',
    inputs: ['inputNumber'],
    templateUrl: 'app/app.inputSection.html',
    directives: [BinDecHexInput, BinDisplay, NumericDisplay]
})
export class InputSection {
    inputNumber: MyNumber;
    invalidInput: Boolean = false;
}
