import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat'
})
export class CurrencyFormatPipe implements PipeTransform {
  transform(value: any,
    decimalLength: number = 0,
    currencySign: string = 'R$ ',
    chunkDelimiter: string = '.',
    decimalDelimiter: string = ',',
    chunkLength: number = 3): string {

    value = Number.parseInt(value);
    let sign = '';
    // value /= 100;
    if (value < 0) {
      sign = '- ';
      value *= -1;
    }

    const result = '\\d(?=(\\d{' + chunkLength + '})+' + (decimalLength > 0 ? '\\D' : '$') + ')';
    // tslint:disable-next-line:no-bitwise
    const num = value.toFixed(Math.max(0, ~~decimalLength));

    // tslint:disable-next-line:max-line-length
    return sign + currencySign + (decimalDelimiter ? num.replace('.', decimalDelimiter) : num).replace(new RegExp(result, 'g'), '$&' + chunkDelimiter);
  }

}
