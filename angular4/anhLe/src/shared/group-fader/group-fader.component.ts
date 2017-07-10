/**
 * Created by anhle on 7/10/17.
 */
import {query, stagger, animate, style, transition, trigger} from '@angular/animations';
import { Component, HostBinding } from '@angular/core';

@Component({
    selector: 'group-fader',
    templateUrl: './group-fader.html',
    animations: [
        trigger('fadein', [
            transition(':enter', [
                query('.group .card', style({ transform: 'translateY(-50px)', opacity: 0})),
                query('.group', [
                    stagger(300, [
                        query('.card', [
                            stagger(200, [
                                animate('800ms cubic-bezier(.35,0,.25,1)', style('*'))
                            ])
                        ])
                    ])
                ])
            ]),
        ])
    ]
})
export class GroupFaderComponent {

    @HostBinding('@fadein')
    public fadein = true;

    constructor() {
    }
}
