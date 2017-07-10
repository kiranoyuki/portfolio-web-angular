/**
 * Created by anhle on 7/9/17.
 */
import {query, stagger, animate, style, transition, trigger, state} from '@angular/animations';
import { Component, Input, OnChanges } from '@angular/core';


@Component({
    selector : 'my-fader',
    template: `
    <div [@visibilityChanged]="visibility" style="width:100%;">
      <ng-content></ng-content>    
    </div>
  `,
    animations: [
        trigger('visibilityChanged', [
            transition(':enter', [
                query('.object-animate', [
                    style({ transform: 'translateY(20px)', opacity: 0 }),
                    stagger(100, [
                        animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style('*'))
                    ])
                ], {optional: true}, )
            ])

        ])
    ]
})
export class FaderComponent implements OnChanges {
    @Input() isVisible : boolean = true;
    visibility = 'enter';

    ngOnChanges() {
        if(this.isVisible){
            this.visibility = 'display';
        }
    }
}


