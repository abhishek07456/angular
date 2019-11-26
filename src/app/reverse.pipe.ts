import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(val: String): String {
    length=val.length;
    let s="";
    for(let i=length-1;i>=0;i--)
      {
        s+=val.charAt(i);
      }
     return s;
  }

}
