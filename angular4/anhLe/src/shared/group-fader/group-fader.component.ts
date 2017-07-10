/**
 * Created by anhle on 7/10/17.
 */
/**
 * Created by anhle on 7/9/17.
 */
import {query, stagger, animate, style, transition, trigger, keyframes} from '@angular/animations';
import {Component, Input, OnChanges} from '@angular/core';


@Component({
    selector : 'group-fader',
    templateUrl : './group-fader.html',
    animations: [
        trigger('listAnimation', [
            transition(':enter', [
                query('*', [
                    style({ transform: 'translateY(20px)', opacity: 0 }),
                    stagger(100, [
                        animate('1200ms cubic-bezier(0.35, 0, 0.25, 1)', style('*'))
                    ])
                ])
            ])
        ])
    ]
})
export class GroupFaderComponent {

    @Input('items') items: any[];
}


