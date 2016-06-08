/**
 * Created by brycedcarter on 6/4/16.
 */

import { Component, Input } from '@angular/core';

import {MyRegister} from "./register";
import {MyOperation} from "./operation";

@Component({
    selector: 'operation-display',
    templateUrl: 'app/app.operationDisplay.html',
    inputs: ['displayOperation'],
    directives: []
})
export class OperationDisplay {
    displayOperation: MyOperation;
    operationDisplayId: string;

    constructor()
    {
        this.operationDisplayId = [0,0,0,0].map(function(inp){return Math.floor((1 + Math.random()) * 0x10000).toString(16).substr(1)}).join('-')
    }

}
