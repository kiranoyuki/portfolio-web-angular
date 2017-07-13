/**
 * Created by anhle on 7/5/17.
 */
import {Component, Input} from '@angular/core';
import {Image} from '../object-interface/image-interface';

@Component({
    selector: 'custom-carousel',
    templateUrl : 'carousel.html',
    styleUrls: ['carousel.css']
})

export class CarouselComponent {
    @Input('project-images') images: Image[];

    constructor () {}

    isActive(image: Image) {
        return image === this.images[0];
    }

}