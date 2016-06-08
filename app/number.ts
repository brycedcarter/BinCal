import {tmpdir} from "os";
import {CalculationElement} from "./calculationElements";
/**
 * Created by brycedcarter on 6/4/16.
 */

export class MyNumber extends CalculationElement
{
    // TODO update error checking using bitwidth
    bitWidth: number = 32;
    byteWidth: number = 4;
    private _value: number = 0;
    binString: string = '';
    hexString: string = '';
    decString: string = '';
    twosString: string = '';
    bitArray: number[] = [];
    byteArray: number[][] = [];
    invalidValue: Boolean = false;

    constructor(value)
    {
        super();
        this.value = value;
    }

    set value(value: number|string)
    {
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
            else if (value.toUpperCase().substr(0,2) == '0T')
            {
                if (value.match(/^0T-/))
                {
                    var tmpBitString = parseInt(value.replace('0T-', ''), 10).toString(2)
                    var tmpBitArray = Array(this.bitWidth+1-tmpBitString.length).join('0').concat(tmpBitString).split('').map(Number);
                    if (tmpBitArray[0] == 1)
                    {
                        this._value = NaN;
                    }
                    else
                    {
                        tmpBitArray = tmpBitArray.map(function (x) {return 1-x});
                        this._value = (parseInt(tmpBitArray.map(String).join(''),2)+1);
                    }
                }
                else
                {
                    this._value = parseInt(value.replace('0T', ''), 10);
                }
                if ('0T'.concat((-(~this._value+1)).toString(10)) != value.toUpperCase())
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
            this.twosString = (-(~this._value+1)).toString(10);
            var tmpBitString = this._value.toString(2);
            this.bitArray = Array(this.bitWidth+1-tmpBitString.length).join('0').concat(tmpBitString).split('').map(Number);
            this.binString = this.bitArray.join('').replace(/^0*/,'');
        }
        else
        {
            this.hexString = 'INVALID';
            this.decString = 'INVALID';
            this.twosString = 'INVALID';
            this.binString = 'INVALID';
            this.bitArray = Array(this.bitWidth+1).join('0').split('').map(Number);
        }
        this.byteArray = [];
        for (var i = 0; i<this.byteWidth; i++)
        {
            this.byteArray.push(this.bitArray.slice(i*8,(i+1)*8))
        }
    }
}
