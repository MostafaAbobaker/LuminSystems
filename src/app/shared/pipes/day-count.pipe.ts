import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dayCount'
})
export class DayCountPipe implements PipeTransform {
  transform(value: string | Date): number {
    if (!value) {
      return 0; 
    }
    const date = typeof value === 'string' ? new Date(value) : value;
    return date.getDate(); 
  }
}
