import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bigInteger'
})
export class BigIntegerPipe implements PipeTransform {
  transform(value: string): string {
    const parsedValue = parseInt(value, 10);
    return parsedValue >= 1000000 ? `${Math.floor(10 * parsedValue / 1000000) / 10}M` :
      parsedValue >= 1000 ? `${Math.floor(10 * parsedValue / 1000) / 10}K` : `${parsedValue}`;
  }
}
