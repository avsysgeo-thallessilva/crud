import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category',
})
export class CategoryPipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case 'Tec Dev Fullstack':
        return 'computer';
      case 'Tec Dev Flutter':
        return 'code';
    }
    return 'code';
  }
}
