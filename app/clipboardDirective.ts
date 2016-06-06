/**
 * Created by brycedcarter on 6/6/16.
 */

import {Directive, ElementRef, Input, Output, EventEmitter} from '@angular/core';

declare var Clipboard:any;
@Directive({
    selector: '[clipboard]'
})
export class ClipboardDirective
{
    clipboard:any;

    @Input('clipboard')
    copyValue:string;

    constructor(private eltRef:ElementRef)
    {
    }

    ngOnInit()
    {
        console.log(this.copyValue);
        this.clipboard = new Clipboard(this.eltRef.nativeElement,
            {
                text: () =>
                {
                    return this.copyValue;
                }
            });
    }

    ngOnDestroy()
    {
        if (this.clipboard)
        {
            this.clipboard.destroy();
        }
    }
}