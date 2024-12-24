import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cepFormat'
})
export class CepFormatPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return '';

    const onlyNumbers = value.replace(/\D/g, '');

    if (onlyNumbers.length <= 5) {
      return onlyNumbers;
    } else {
      return `${onlyNumbers.slice(0, 5)}-${onlyNumbers.slice(5, 8)}`;
    }
  }
}
