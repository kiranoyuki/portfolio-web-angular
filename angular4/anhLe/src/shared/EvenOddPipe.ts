/**
 * Created by anhle on 7/13/17.
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'evenodd' })
export class EvenOddPipe implements PipeTransform {
    transform(value:any[], filter:string) {
        if(!value || (filter !== 'even' && filter !== 'odd')) {
            return value;
        }
        return value.filter((item, idx) => { return filter === 'even' ? idx % 2 === 1 : idx % 2 === 0; } );    }
}