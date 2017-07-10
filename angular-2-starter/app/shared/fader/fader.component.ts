/**
 * Created by anhle on 7/9/17.
 */
import {
    Component, OnChanges, Input,
    trigger, state, animate, transition, style, group
} from '@angular/core';

@Component({
    selector : 'my-fader',
    template: `
    <div [@visibilityChanged]="visibility" >
      <ng-content></ng-content>    
    </div>
  `,
    animations: [
        trigger('visibilityChanged', [
            state('leave', style({opacity: 0}) ),
            transition('leave => enter', [
                style({opacity: 1, transform: 'translateY(25px)'}),
                animate('500ms cubic-bezier(.35,0,.25,1)', style({transform: 'translateY(0%)'}))
            ]),
            transition('enter => leave', [
                style({transform: 'translateY(0%)'}),
                animate('500ms cubic-bezier(.35,0,.25,1)', style({transform: 'translateY(-25px)'}))
            ])
        ])
    ]
})
export class FaderComponent implements OnChanges {
    @Input() isVisible : boolean = true;
    visibility = 'enter';

    ngOnChanges() {
        this.visibility = this.isVisible ? 'enter' : 'leave';
    }
}


