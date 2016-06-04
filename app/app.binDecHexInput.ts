/**
 * Created by brycedcarter on 6/4/16.
 */
import { Component, Input } from '@angular/core';
import { NumberMode } from './types'

@Component({
    selector: 'bin-dec-hex-input',
    template:`
    <div class="row">
        <div class="col-md-10">
            <input [(ngModel)]="inputText" type="text" class="form-control" placeholder="Input...">
        </div>
        <!-- /.col-lg-6 -->
        <div class="col-md-2">
            <div class="btn-group btn-group-justified" role="group" aria-label="...">

                <div class="btn-group">
                    <button type="button" class="btn btn-default active">Bin</button>
                </div>
                <div class="btn-group">
                    <button type="button" class="btn btn-default">Dec</button>
                </div>
                <div class="btn-group">
                    <button type="button" class="btn btn-default">Hex</button>
                </div>
            </div>
        </div>
    </div>
    `
})
export class BinDecHexInput {
    inputText = '';
    inputType = NumberMode.Binary;
}
