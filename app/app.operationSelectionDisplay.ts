/**
 * Created by brycedcarter on 6/8/16.
 */

import { Component, Input } from '@angular/core';

import {MyOperation} from "./operation";
import {CalculationElement} from "./calculationElements";

@Component({
    selector: 'operation-selection-display',
    templateUrl: 'app/app.operationSelectionDisplay.html',
    inputs: ['calculationElements'],
    directives: []
})
export class OperationSelectionDisplay {
    operationDisplayId: string;
    calculationElements:Array<CalculationElement> ;

    createOperation(operationName: string)
    {
        var newOperation = new MyOperation(operationName);
        this.calculationElements.push(newOperation);
    }

}
