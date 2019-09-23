import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bytes'
})
export class BytesPipe implements PipeTransform {

  transform(value: number, args: string): any {

    switch(args){
      case 'mega':

      const mgbyts = (value /1000000).toFixed(3);

        return `${mgbyts} Mb`;
    }

    return null;
  }

}
