/**
 * Created by anhle on 7/10/17.
 */
/**
 * Created by anhle on 7/9/17.
 */
import {query, stagger, animate, style, transition, trigger, keyframes, animateChild, group} from '@angular/animations';
import {Component, Input, OnChanges} from '@angular/core';


@Component({
    selector : 'group-fader',
    templateUrl : './group-fader.html',
    animations: [
        trigger('listAnimation', [
            transition(':enter', [
                query('*', [
                    style({ transform: 'translateY(20px)', opacity: 0 }),
                    stagger(20, [
                        animate('1000ms cubic-bezier(0.35, 0, 0.25, 1)', style('*'))
                    ])
                ], {optional: true})
            ]),
            transition(':leave', [
                query('*', [
                    style({ overflow: 'hidden' }),
                    animate('0.5s cubic-bezier(0.35, 0, 0.25, 1)', style({ height: '0px'}))
                ])

            ])

        ])
    ]
})
export class GroupFaderComponent {

    @Input('items') items: any[];
}


