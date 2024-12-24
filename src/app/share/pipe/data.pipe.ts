import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataFormat'
})
export class DataFormatPipe implements PipeTransform {

  transform(date: string): string {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!regex.test(date)) {
        throw new Error("Data inválida. O formato deve ser 'yyyy-MM-dd'.");
    }
    const [year, month, day] = date.split('-');

    return `${year}/${month}/${day}`;
  }
}
