import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpfFormat'
})
export class CpfFormatPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return '';

    const cpf = value.replace(/\D/g, '');

    if (cpf.length !== 11) {
      return value; // ou você pode retornar uma mensagem de erro
    }

    return `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6, 9)}-${cpf.slice(9, 11)}`;
  }
}
