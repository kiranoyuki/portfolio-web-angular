/**
 * Created by anhle on 7/10/17.
 */
/**
 * Created by anhle on 7/9/17.
 */
import {query, stagger, animate, style, transition, trigger, keyframes} from '@angular/animations';
import { Component, Input } from '@angular/core';


@Component({
    selector : 'group-fader',
    templateUrl : './group-fader.html',
    animations: [
        trigger('listAnimation', [
            transition('* => *', [

                query(':enter', style({ opacity: 0 }), {optional: true}),

                query(':enter', stagger('200ms', [
                    animate('1s ease-in', keyframes([
                        style({opacity: 0, transform: 'translateY(20%)', offset: 0}),
                        style({opacity: .5, transform: 'translateY(-10px)',  offset: 0.3}),
                        style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
                    ]))]), {optional: true})
            ])
        ])
    ]
})
export class GroupFaderComponent {


    @Input('items') items: any[];

}


