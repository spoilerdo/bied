import { Pipe, PipeTransform } from '@angular/core';

interface EnumToArrayPipeResult {
  index: string;
  name: string | number;
}

@Pipe({
  name: 'enumToArray',
})
export class EnumToArrayPipe implements PipeTransform {
  transform(value): EnumToArrayPipeResult[] {
    return Object.keys(value).map(o => ({ index: o, name: value[o] }));
  }
}
