import { Pipe, PipeTransform } from '@angular/core';
import * as data from './lang_it.json';

/**
 * This pipe transforms the input string into the value to be rendered
 */
@Pipe({
  name: 'lang'
})
export class LangPipe implements PipeTransform {

  /**
   * Retrieves the value to be rendered by .html
   * @param value : JSON INDEX
   * @returns A string with the value contained into data
   */
  transform(value: string): unknown {
    return data['default'][value];
  }

  /**
   * Retrieves the value to be elaborated by .ts
   * @param value : JSON INDEX
   * @returns A string with the value contained into data
   */
  static transformation (value: string) {
    return data['default'][value]
  }

}
