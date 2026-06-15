import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'monthName'
})
export class MonthNamePipe implements PipeTransform {
  transform(value: string | Date): string {
    if (!value) {
      return ''; 
    }

    const date = typeof value === 'string' ? new Date(value) : value;

    return date.toLocaleString('en-us', { month: 'short' });
  }
}
