
import {isNullOrUndefined} from 'util';
declare var $: any;

export class Toolkit {
  // تبدیل اعداد انگلیسی به فارسی
  public static En2Fa(value: any): any {
    const englishNumbers = ['۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹', '۰'];
    const persianNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    if (isNullOrUndefined(value)) {
      return value;
    }
    let myvalue: string = value.toString();
    if (!isNullOrUndefined(value)) {
      for (let i = 0, numbersLen = persianNumbers.length; i < numbersLen; i++) {
        myvalue = myvalue.replace(new RegExp(persianNumbers[i], 'g'), englishNumbers[i]);
      }
    }
    return myvalue;
  }
}
