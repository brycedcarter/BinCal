/**
 * Created by brycedcarter on 6/4/16.
 */

import { Component, Input } from '@angular/core';
import {MyNumber} from "./number";
import {BinDisplay} from "./app.binDisplay";
import {NumericDisplay} from "./app.numericDisplay";
import {MyRegister} from "./register";

@Component({
    selector: 'full-number-display',
    templateUrl: 'app/app.fullNumberDisplay.html',
    inputs: ['displayNumber', 'displayRegister'],
    directives: [BinDisplay, NumericDisplay]
})
export class FullNumberDisplay {
    displayNumber: MyNumber;
    numberDisplayId: string;
    displayRegister: MyRegister;
    
    constructor()
    {
        this.numberDisplayId = [0,0,0,0].map(function(inp){return Math.floor((1 + Math.random()) * 0x10000).toString(16).substr(1)}).join('-')
    }

}
