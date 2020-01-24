import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(args == 'number'){
      if(value>5){
        return "The number is greater than 5"
      }else{
        return "The number is less than or equal to 5"
      }
  }else if(args == 'string'){
    if(value.length>5){
      return "The length is greater than 5"
    }else{
      return "The length is less than or equal to 5"
    }
  }
    return null;
  }

}
