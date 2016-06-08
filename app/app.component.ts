import { Component } from '@angular/core';
import {MyNumber} from "./number";
import {InputSection} from "./app.inputSection";
import {DND_PROVIDERS, DND_DIRECTIVES} from 'ng2-dnd/ng2-dnd';
import {CalculationElement} from "./calculationElements";
import {MyRegister} from "./register";
import {FullNumberDisplay} from "./app.fullNumberDisplay";
import {OperationSelectionDisplay} from "./app.operationSelectionDisplay";
import {OperationDisplay} from "./app.operationDisplay";

@Component({
    selector: 'bincal-app',
    templateUrl: 'app/app.component.html',
    directives: [InputSection, DND_DIRECTIVES, FullNumberDisplay, OperationSelectionDisplay, OperationDisplay]
})
export class AppComponent
{

    inputNumber: MyNumber = new MyNumber(0);
    registers: Array<MyRegister> = [new MyRegister(1), new MyRegister(2), new MyRegister(3), new MyRegister(4)];
    calculationElements:Array<CalculationElement> = [];

    loadInputToReg(regNumber: number)
    {
        this.registers[regNumber-1].value = this.inputNumber;
        this.inputNumber = new MyNumber(0);
        if (this.calculationElements.indexOf(this.registers[regNumber-1]) == -1)
        {
            this.calculationElements.push(this.registers[regNumber-1])
        }

    }
}
