import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
/**
 * Пайп для преобразования номера телефона в формат со скобками
 * @param value номер телефона
 * @param prefix выходной префикс телефона
 */
export class PhonePipe implements PipeTransform {

  transform(value: string | number, prefix:string = '+7'): unknown {
    const strNum = value.toString().replace(/[^0-9]/g, '');
    
    let phoneWithoutPrefix = strNum;
    if (strNum.startsWith('7') || strNum.startsWith('8')) {
      phoneWithoutPrefix = strNum.substr(1);
    } 
    const telWithBrackets = ' (' + phoneWithoutPrefix.substr(0,3) + ') ' + phoneWithoutPrefix.substr(3);
    return prefix + telWithBrackets;
  }
}
