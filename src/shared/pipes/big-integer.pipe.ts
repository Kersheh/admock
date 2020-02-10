import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bigInteger'
})
export class BigIntegerPipe implements PipeTransform {
  transform(value: number): string {
    return value >= 1000000 ? `${Math.floor(10 * value / 1000000) / 10}M` :
      value >= 1000 ? `${Math.floor(10 * value / 1000) / 10}K` : `${value}`;
  }
}
