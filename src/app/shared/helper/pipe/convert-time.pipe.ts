import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'convertTime'
})
export class ConvertTimePipe implements PipeTransform {

  transform(value: any): any {
      let h: string | number = Math.floor(value / 60);
      let m: string | number = value % 60;
      h = h < 10 ? '0' + h : h;
      m = m < 10 ? '0' + m : m;
      return h + ':' + m;
  }

}
