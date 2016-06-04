/**
 * Created by brycedcarter on 6/4/16.
 */
import { Component } from '@angular/core';
import { BinDecHexInput } from './app.binDecHexInput'

@Component({
    selector: 'input-section',
    template:`
    <bin-dec-hex-input></bin-dec-hex-input>
    <bin-dec-hex-display></bin-dec-hex-display> 
    `,
    directives: [BinDecHexInput]
})
export class InputSection {

}
