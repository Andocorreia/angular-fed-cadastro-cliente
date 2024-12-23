import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefoneFormat'
})
export class TelefoneFormatPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return '';
    }

    const cleaned = value.replace(/\D/g, '');

    if (cleaned.length < 10 || cleaned.length > 11) {
      return value;
    }

    const ddd = cleaned.substring(0, 2);
    const prefix = cleaned.length === 11 ? cleaned.substring(2, 7) : cleaned.substring(2, 6);
    const suffix = cleaned.substring(cleaned.length - 4);

    return `(${ddd}) ${prefix}-${suffix}`;
  }
}
