/**
 * Created by brycedcarter on 6/8/16.
 */

import {CalculationElement} from "./calculationElements";

export class MyOperation extends CalculationElement
{
    elementType = 'operation';
    name: string;
    representation: string;

    constructor(name: string)
    {
        super();
        this.name = name;
    }

}