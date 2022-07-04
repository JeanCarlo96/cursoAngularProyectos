import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformVowels'
})
export class TransformVowelsPipe implements PipeTransform {

  transform(value: string): string {
    let result = '';

    let letras = value.toUpperCase().split('');

    letras.forEach( (letra, index) => {
      letra === 'A' ? letras[index] = String(4)
                    : letra === 'E' ? letras[index] = String(3)
                    : letra === 'I' ? letras[index] = String(1)
                    : letra === 'O' ? letras[index] = String(0)
                    : letras[index] = letra;

    });

    result = letras.join('');

    return result;
  }

}
