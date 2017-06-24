/**
 * Created by anhle on 6/20/17.
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'truncate'})

export class TruncatePipe implements PipeTransform {
    transform(value: string, arg: string[]): any {
        let text = value.substring(0,180) + '...';

        return text;
    }
}