/**
 * Created by anhle on 7/14/17.
 */
/**
 * Created by anhle on 7/13/17.
 */
import { Pipe, PipeTransform } from '@angular/core';
import {Tags} from "../infos/constant";

@Pipe({ name: 'projectFilter' })
export class ProjectFilter implements PipeTransform {
    transform(value:any[], filter:string) {
        if(!value || !Tags.find(x => x === filter)) {
            return value;
        }
        return value.filter((item) => {
            let tags = item.tags;
            return tags.find(x => x === filter);
        });
    }
}