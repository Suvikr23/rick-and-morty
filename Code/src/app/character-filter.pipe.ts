import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'characterFilter'
})
export class CharacterFilterPipe implements PipeTransform {
  transform(items: any[], species: any, gender: any, origin: any): any {
    console.log(species);
      if (!items || (!gender.length && !origin.length && !species.length)) {
          return items;
      }
        if(species.length) {
          items = items.filter(item => species.indexOf(item.species) > -1);
        }

        if(gender.length) {
          items = items.filter(item => gender.indexOf(item.gender) > -1);
        }

        if(origin.length) {
          items = items.filter(item => origin.indexOf(item.origin.name) > -1);
        }
       return items;
  }
}