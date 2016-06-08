import {MyNumber} from "./number";
import {CalculationElement} from "./calculationElements";
/**
 * Created by brycedcarter on 6/7/16.
 */

export class MyRegister extends CalculationElement
{
    elementType = 'register';
    value: MyNumber;
    registerIdNumber: number;

    constructor(idNumber: number)
    {
        super();
        this.registerIdNumber = idNumber;
    }
}