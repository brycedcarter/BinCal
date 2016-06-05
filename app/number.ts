import {tmpdir} from "os";
/**
 * Created by brycedcarter on 6/4/16.
 */

export class MyNumber
{
    // TODO update error checking using bitwidth
    bitWidth: number = 32;
    byteWidth: number = 4;
    private _value: number = 0;
    hexString: string = '';
    decString: string = '';
    bitArray: number[] = [];
    byteArray: number[][] = [];
    invalidValue: Boolean = false;

    constructor(value)
    {
        this.value = value;
    }

    set value(value: number|string)
    {
        console.log('here too');
        console.log(value);
        if(typeof value === 'number')
        {
            this._value = value;
        }
        else if (typeof value === 'string')
        {
            if (value.toUpperCase().substr(0,2) == '0X')
            {
                this._value = parseInt(value.replace('0X', ''), 16);
                if ('0X'.concat(this._value.toString(16).toUpperCase()) != value.toUpperCase())
                {
                    this._value = NaN
                }
            }
            else if (value.toUpperCase().substr(0,2) == '0B')
            {
                this._value = parseInt(value.replace('0B', ''), 2);
                if ('0B'.concat(this._value.toString(2).toUpperCase()) != value.toUpperCase())
                {
                    this._value = NaN
                }
            }
            else
            {
                this._value = parseInt(value, 10);
                if (this._value.toString(10).toUpperCase() != value.toUpperCase())
                {
                    this._value = NaN
                }
            }
            this.invalidValue = isNaN(this._value) || (this._value > (Math.pow(2,this.bitWidth) - 1));

        }
        this.updateStrings()
    }

    updateStrings()
    {
        if (!this.invalidValue)
        {
            this.hexString = this._value.toString(16).toUpperCase();
            this.decString = this._value.toString(10);
            var tmpBitString = this._value.toString(2);
            this.bitArray = Array(this.bitWidth+1-tmpBitString.length).join('0').concat(tmpBitString).split('').map(Number);
        }
        else
        {
            this.hexString = 'INVALID';
            this.decString = 'INVALID';
            this.bitArray = Array(this.bitWidth+1).join('0').split('').map(Number);
        }
        this.byteArray = [];
        for (var i = 0; i<this.byteWidth; i++)
        {
            this.byteArray.push(this.bitArray.slice(i*8,(i+1)*8))
        }
    }
}
