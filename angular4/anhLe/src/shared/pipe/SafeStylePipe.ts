/**
 * Created by anhle on 9/6/17.
 */

import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({name: 'SafeStyle'})
export class SafeStylePipe implements PipeTransform {
    constructor(private sanitizer:DomSanitizer){}

    transform(style) {
        console.log('style ' + style);
        return this.sanitizer.bypassSecurityTrustStyle(style);
    }
}