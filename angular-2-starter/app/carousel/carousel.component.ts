/**
 * Created by anhle on 7/5/17.
 */
import {Component, Input} from '@angular/core';
import {Image} from '../shared/image-interface';
import {ImageService} from '../shared/image.service';

@Component({
    selector: 'custom-carousel',
    templateUrl : 'app/carousel/carousel.html',
    styleUrls: ['app/carousel/carousel.css']
})

export class CarouselComponent {
    @Input('project-images') images: Image[];

    constructor () {}


}